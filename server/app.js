const express = require("express");
const http = require("http");
const ip = require('ip');
const { Server } = require("socket.io");
const { findAvailableRoom, createRoom, removeUserFromRoom } = require('./service');
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
    maleToFemale: { count: 0, room: {}, waiting: { maleToMale: [], femaleToFemale: [] }, nextGender: 'maleToMale' },
    femaleToFemale: {
        count: 0,
        users: [],
        room: {}
    },
    maleToMale: {
        count: 0,
        users: [],
        room: {}
    }
};

const registrationGender = {
    maleToFemale: genderSearch.maleToFemale,
    femaleToFemale: genderSearch.femaleToFemale,
    maleToMale: genderSearch.maleToMale
}

// добавление пользователя в очередь
const addUser = (user, ownGender, searchPartnerGender, socket) => {
    // случай: однополые комнаты
    if (ownGender === searchPartnerGender) {
        const category = registrationGender[searchPartnerGender];
        if (!category.count) category.count = 1;

        let lastRoom = `room${category.count}`;
        if (!category.room[lastRoom]) category.room[lastRoom] = [];

        // если текущая комната переполнена → создаём новую
        if (category.room[lastRoom].length >= 2) {
            category.count++;
            lastRoom = `room${category.count}`;
            category.room[lastRoom] = [];
        }
        const newUser = { name: user, gender: ownGender, socket };
        category.users.push(newUser);
        const queuedUser = category.users.shift();
        if (!queuedUser) {
            console.log("Очередь пуста, пользователя нет");
            return; // выходим или обрабатываем по-другому
        }

        queuedUser.socket.join(lastRoom);
        queuedUser.socket.lastRoom = lastRoom;
        category.room[lastRoom].push(queuedUser);

        console.log(`👤 ${queuedUser.name} (${queuedUser.gender}) добавлен в ${lastRoom}`);
        io.to(lastRoom).emit("roomState", category.room[lastRoom].length);

    } else {
        // случай: мальчик-девочка (очередь)
        const category = registrationGender.maleToFemale;
        category.waiting[ownGender].push({ name: user, gender: ownGender, socket });
    }
};


// setInterval(() => {
//     const category = registrationGender.maleToFemale;
//     const maleWaiting = category.waiting.maleToMale;
//     const femaleWaiting = category.waiting.femaleToFemale;
//     console.log(genderSearch.maleToFemale.waiting);
//     // пока есть хотя бы один мужчина и одна женщина
//     while (maleWaiting.length > 0 && femaleWaiting.length > 0) {
//         const maleUser = maleWaiting.shift();
//         const femaleUser = femaleWaiting.shift();

//         // получаем последнюю комнату или создаём новую
//         let lastRoom = category.count;
//         if (!category.room[lastRoom] || category.room[lastRoom].length >= 2) {
//             category.count = (category.count || 0) + 1;
//             lastRoom = `room${category.count}`;
//             category.room[lastRoom] = [];
//         }

//         // добавляем пользователей в комнату
//         category.room[lastRoom].push(maleUser, femaleUser);

//         console.log(`Создана комната ${lastRoom}: ${maleUser.name} + ${femaleUser.name}`);
//         // 🔥 Уведомляем обоих клиентов;
//         console.log(category.room[lastRoom]);

//         category.room[lastRoom].forEach(user => {
//             user.socket.join(lastRoom);
//             console.log(`${user.name} (${user.gender}) подключился к комнате ${lastRoom}`);
//         });
//         io.to(lastRoom).emit('roomState', [category.room[lastRoom]]);

//     }
// }, 5000);

// // client connection to the room
io.on("connection", (socket) => {
    const category = registrationGender.maleToFemale;

    socket.on('createRoom', (data) => {
        const ip = socket.handshake.address.replace(/^::ffff:/, '');
        const localName = data.localName;
        const ownGender = data.OwnGender;
        const searchPartnerGender = data.searchOptions.searchPartnerGender;

        addUser(localName, ownGender.value, searchPartnerGender.value, socket);

        const maleWaiting = category.waiting.maleToMale;
        const femaleWaiting = category.waiting.femaleToFemale;

        while (maleWaiting.length > 0 && femaleWaiting.length > 0) {
            const maleUser = maleWaiting.shift();
            const femaleUser = femaleWaiting.shift();

            // создаём комнату
            category.count = (category.count || 0) + 1;
            const lastRoom = `room${category.count}`;
            category.room[lastRoom] = [];

            // добавляем пользователей в комнату
            maleUser.socket.join(lastRoom);
            femaleUser.socket.join(lastRoom);

            maleUser.socket.lastRoom = lastRoom;
            femaleUser.socket.lastRoom = lastRoom;

            category.room[lastRoom].push(maleUser, femaleUser);

            console.log(`Создана комната ${lastRoom}: ${maleUser.name} + ${femaleUser.name}`);
            io.to(lastRoom).emit('roomState', category.room[lastRoom].length);
        }
    });

    socket.on('sendMessae', ({ name, msg }) => {
        if (!socket.lastRoom) {
            console.log("⚠️ Пользователь не в комнате, сообщение не отправлено");
            return;
        }
        io.to(socket.lastRoom).emit('liveMsg', { name, msg });
    });
    socket.on('chat_leave', (text) => console.log(text));
});
// send message  to the client

// deletion of the user from the room

// socket.on('disconnect', () => {
//     setTimeout(() => {
//         if (id) removeUserFromRoom(info, user, io, id);
//     }, 5000);
// });


// Запуск сервера
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
