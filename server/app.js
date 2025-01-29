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
        user.ip = socket.handshake.address.replace(/^::ffff:/, '');
        user.localName = data.localName
        user.ownGender = data.OwnGender
        user.searchPartnerGender = data.searchOptions.searchPartnerGender
        // search for the room
        id = findAvailableRoom(info, user, socket);
        if (!id) {
            console.log('Я не нашел комнату, создаю новую...');
            id = createRoom(socket, user, info); // Создаем новую комнату
        } else {
            console.log('Комната найдена, присоединяюсь...');
        }

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
