const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

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
let count = 0;



// Обработка подключения клиента
io.on("connection", (socket) => {
    let id = 0;
    let name = '';

    // Генерация комнаты
    socket.on('createRoom', (data) => {
        name = data.localName;

        // Ищем все свободные комнаты
        const findAvailableRoom = () => {
            const find = info
                .filter(item => item.listUsers.length === 1)
                .filter(item => item.listUsers.some(user => user.ownGender === data.searchOptions.searchPartnerGender))
                .map(item => item.room);
            if (find.length > 0) {
                // Рандомно выбираем свободную комнату
                const randomRoom = find[Math.floor(Math.random() * find.length)];
                socket.join(randomRoom);
                id = randomRoom;

                // Обновляем комнату с новым пользователем
                info.forEach((item) => {
                    if (item.room === randomRoom) {
                        item.listUsers.push({
                            name: data.localName,
                            ownGender: data.OwnGender,
                            searchPartnerGender: data.searchOptions.searchPartnerGender,
                        });
                    }
                });
                return true
            }
            return false
        }
        const createRoom = (findRoom) => {
            if (!findRoom) {
                count++;
                id = count;
                socket.join(id);
                info.push({ room: count, listUsers: [{ name: data.localName, ownGender: data.OwnGender, searchPartnerGender: data.searchOptions.searchPartnerGender }] })
            }
        }
        createRoom(findAvailableRoom())


        const roomInfo = info.find(item => item.room === id);
        if (roomInfo) {
            io.to(id).emit('roomState', roomInfo.listUsers.length);
        }
        console.log(info);

    });

    socket.on('chat_leave', (localName) => {
        console.log(info);
        // Удаление пользователя из комнаты
        info.forEach((item, index) => {
            if (item.room === id) {

                const indexToRemove = item.listUsers.findIndex(user => user.name === localName);
                if (indexToRemove !== -1) {
                    item.listUsers.splice(indexToRemove, 1);

                    io.to(id).emit('currentUser', item.listUsers.length);
                    if (item.listUsers.length === 0) {
                        info.splice(index, 1); // Удаление пустой комнаты
                    }
                }
            }
        });
    });

    socket.on('sendMessae', (msg) => {
        io.to(id).emit('liveMsg', { name: name, msg: msg });
    });

    // socket.on('disconnect', () => {
    //     info.forEach((item, index) => {
    //         if (item.room === id) {
    //             item.listUsers = item.listUsers.filter(user => user.socketId !== socket.id);
    //             if (item.listUsers.length === 0) {
    //                 info.splice(index, 1);
    //             }
    //         }
    //     });

    //     io.to(id).emit('currentUser', info.length);
    // });
});

// Запуск сервера
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
