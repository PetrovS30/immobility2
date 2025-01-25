const express = require("express");
const http = require("http");
const ip = require('ip');
const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');
const { default: removeUserFromRoom } = require("./service");

// Инициализация приложения
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Разрешаем подключение с любого источника
        methods: ["GET", "POST"],
    },
});

const info = [];
// client connection to the room
io.on("connection", (socket) => {

    let id = null;
    const user = {
        ip: null,
        localName: null,
        ownGender: null,
        searchPartnerGender: null
    }

    socket.on('createRoom', (data) => {
        user.ip = ip.address()
        user.localName = data.localName
        user.ownGender = data.OwnGender
        user.searchPartnerGender = data.searchOptions.searchPartnerGender
        // search for the room
        const findAvailableRoom = () => {
            const find = info
                .filter(item =>
                    item.listUsers.length === 1 &&
                    item.listUsers.some(u => u.ownGender === user.searchPartnerGender && u.ip !== user.ip)
                )
                .map(item => item.room);
            const randomRoom = find[Math.floor(Math.random() * find.length)] || null;
            if (randomRoom) {
                id = randomRoom;
                socket.join(randomRoom);
                // update fot room the new user
                // Update the room with a new user
                // Обновляем комнату с новым пользователем
                info.forEach((item) => {
                    if (item.room === randomRoom) {
                        item.listUsers.push(user);
                    }
                });
            }
            return randomRoom ? true : null
        }
        // generation of the room
        const createRoom = (findRoom) => {
            if (!findRoom) {
                id = uuidv4();
                socket.join(id);
                info.push({ room: id, listUsers: [user] })
                console.log([user]);

            }
        }
        createRoom(findAvailableRoom())


        const roomInfo = info.find(item => item.room === id);
        if (roomInfo) {
            io.to(id).emit('roomState', roomInfo.listUsers.length);
        }
        console.log(user);

    });
    // send message  to the client
    socket.on('sendMessae', (msg) => {
        io.to(id).emit('liveMsg', { name: user.localName, msg: msg });
    });
    // deletion of the user from the room
    socket.on('chat_leave', () => removeUserFromRoom(info, user, io, id));
    socket.on('disconnect', () => removeUserFromRoom(info, user, io, id));
});

// Запуск сервера
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
