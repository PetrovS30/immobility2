// roomManager.js
const { v4: uuidv4 } = require('uuid');
const findAvailableRoom = (info, user, socket) => {
    const find = info
        .filter(item =>
            item.listUsers.length === 1 &&
            item.listUsers.some(u => u.ownGender === user.searchPartnerGender)
        )
        .map(item => item.room);
    const randomRoom = find[Math.floor(Math.random() * find.length)] || null;
    if (randomRoom) {
        socket.join(randomRoom);
        // Обновляем комнату с новым пользователем
        info.forEach((item) => {
            if (item.room === randomRoom) {
                item.listUsers.push(user);
            }
        });
        return randomRoom; // Возвращаем ID найденной комнаты
    }
    return null; // Если комната не найдена
};

const createRoom = (socket, user, info) => {
    const id = uuidv4(); // Генерация уникального ID комнаты
    socket.join(id);
    info.push({ room: id, listUsers: [user] });
    return id; // Возвращаем ID созданной комнаты
};
const removeUserFromRoom = (info, name, io, id) => {
    info.forEach((item, index) => {
        if (item.room === id) {
            const indexToRemove = item.listUsers.findIndex(user => user.ip === name.ip);
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

module.exports = { findAvailableRoom, createRoom, removeUserFromRoom };
