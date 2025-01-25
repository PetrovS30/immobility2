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
export default removeUserFromRoom;