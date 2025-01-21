const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const { json } = require("stream/consumers");
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

const info = [];
// Обработка подключения клиента
io.on("connection", (socket) => {
    let id = null;
    const user = {
        localName: null,
        ownGender: null,
        searchPartnerGender: null
    }
    // Генерация комнаты
    socket.on('createRoom', (data) => {
        user.localName = data.localName
        user.ownGender = data.OwnGender
        user.searchPartnerGender = data.searchOptions.searchPartnerGender
        // Ищем все свободные комнаты
        const findAvailableRoom = () => {
            const find = info
                .filter(item => item.listUsers.length === 1)
                .filter(item => item.listUsers.some(user => user.ownGender === user.searchPartnerGender))
                .map(item => item.room);
            if (find.length > 0) {
                // Рандомно выбираем свободную комнату
                const randomRoom = find[Math.floor(Math.random() * find.length)];
                socket.join(randomRoom);
                id = randomRoom;

                // Обновляем комнату с новым пользователем
                info.forEach((item) => {
                    if (item.room === randomRoom) {
                        item.listUsers.push(user);
                    }
                });
                return true
            }
            return false
        }
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
    });
    socket.on('sendMessae', (msg) => {
        io.to(id).emit('liveMsg', { name: user.localName, msg: msg });
    });
    const removeUserFromRoom = () => {
        info.forEach((item, index) => {
            if (item.room === id) {
                const indexToRemove = item.listUsers.findIndex(user => user.localName === user.localName);
                if (indexToRemove !== -1) {
                    item.listUsers.splice(indexToRemove, 1);
                    io.to(id).emit('currentUser', item.listUsers.length);
                    if (item.listUsers.length === 0) {
                        info.splice(index, 1); // Удаление пустой комнаты
                    }
                }
            }
        });
    };
    socket.on('chat_leave', () => removeUserFromRoom());
    socket.on('disconnect', () => removeUserFromRoom());
});

// Запуск сервера
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
