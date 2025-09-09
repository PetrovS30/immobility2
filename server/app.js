const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');
// Инициализация приложения
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Разрешаем подключение с любого источника
        methods: ["GET", "POST"],
    },
});


const genderSearch = {
    MaleToFemale: {
        room: {},
        current: null,
        waiting: {
            Male: [],
            Female: []
        }
    },
    FemaleToFemale: {
        current: null,
        room: {}
    },
    MaleToMale: {
        current: null,
        room: {}
    }
};

// котегория
const addToQueue = (ownGender, searchPartnerGender) => {
    const gender = `${ownGender}To${searchPartnerGender}`;
    const reverseGender = `${searchPartnerGender}To${ownGender}`;
    const category = genderSearch[gender] || genderSearch[reverseGender];
    return category;
};

// Однополый поиск
const sameGender = (category, user) => {
    const { name } = user
    let { current, room } = category
    if (!room[category.current] || room[category.current].length >= 2) {
        current = uuidv4();
        category.room[current] = [];
        category.current = current;
    }
    if (room[category.current]) {
        room[category.current].push(user)
        user.socket.join(category.current)
        const size = category.room[current].length
        console.log(size);

        io.to(category.current).emit('joinRoom', size);

        user.socket.currentRoomData = { category, current, name };
        console.log(category);

    }
};

// Разнополый поиск
const mixedGender = (category, user) => {
    const { name, ownGender } = user;

    category.waiting[ownGender].push(user);

    if (
        category.waiting.Male.length > 0 &&
        category.waiting.Female.length > 0
    ) {
        const MaleArr = category.waiting.Male.shift();
        const FemaleArr = category.waiting.Female.shift();

        let current = category.current;

        if (!category.room[current] || category.room[current].length >= 2) {
            current = uuidv4();
            category.room[current] = [];
            category.current = current;
        }

        if (category.room[current]) {
            category.room[current].push(MaleArr, FemaleArr);

            MaleArr.socket.join(current);
            FemaleArr.socket.join(current);

            const size = category.room[current].length;

            io.to(current).emit('joinRoom', size);

            MaleArr.socket.currentRoomData = { category, current, name: MaleArr.name };
            FemaleArr.socket.currentRoomData = { category, current, name: FemaleArr.name };

            console.log(category.room);
        }
    }
};

// обработчик для вызова функции
const getGender = (category, user) => {
    if (category?.waiting) {
        mixedGender(category, user)
    }
    else {
        sameGender(category, user)
    }
};

io.on("connection", (socket) => {

    socket.on("join", (data) => {
        if (socket.currentRoomData) {
        handleUserLeave(socket); // 👈 ДОБАВЬ ЭТО
    }
        socket.hasLeft = false;

        const { localName, OwnGender, searchOptions } = data;
        const user = {
            name: localName,
            ownGender: OwnGender,
            socket: socket
        }
        const getCategory = addToQueue(OwnGender, searchOptions.searchPartnerGender);
        getGender(getCategory, user)
    })

    // send
    socket.on("chatMessage", (msg) => {
        const { localName, localMessage } = msg;
        io.to(socket?.currentRoomData.current).emit('message', { localName, localMessage });
    })


    socket.on('exitChat', () => {
        console.log('🚪 Пользователь вышел:', socket.id);
        handleUserLeave(socket); // удаляем из комнаты
        socket.emit('chatEnded', 'Чат завершён'); // отправляем клиенту
         // отключаем сокет
    });


    function handleUserLeave(socket) {
        if (!socket.currentRoomData) return;

        const { category, current, name } = socket.currentRoomData;
        const room = category.room[current];
        if (!room) return;

        // Удаляем пользователя из комнаты
        category.room[current] = room.filter(user => user.name !== name);
        socket.leave(current);

        // Найдём второго участника
        const remainingUsers = category.room[current];
        if (remainingUsers.length === 1) {
            const remainingUser = remainingUsers[0];

            // Удаляем комнату
            delete category.room[current];

            // Удаляем данные о комнате у второго участника
            delete remainingUser.socket.currentRoomData;

            // Возвращаем второго участника в очередь
            if (category.waiting) {
                category.waiting[remainingUser.ownGender].push(remainingUser);
            }

            // Запускаем поиск заново
            getGender(category, remainingUser);
        }

        // Уведомляем о выходе
        io.to(current).emit('exit', 0);

        // Удаляем данные о комнате из сокета
        delete socket.currentRoomData;
    }

    socket.on("exit", () => {
        handleUserLeave(socket)
    });

    socket.on("disconnect", () => {
        handleUserLeave(socket);
    })

    io.emit('onlineCount', io.engine.clientsCount);

    socket.on('disconnect', () => {
        console.log('Пользователь отключился:', socket.id);
        io.emit('onlineCount', io.engine.clientsCount);
    });

})  

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});


