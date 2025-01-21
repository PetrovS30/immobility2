import { v4 as uuidv4 } from 'uuid';
const findOrCreateRoom = (id, socket, info) => {
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
    const createRoom = () => {
        id = uuidv4();
        socket.join(id);
        info.push({ room: id, listUsers: [user] })
        console.log([user]);
    }
    !findAvailableRoom() && createRoom()
}
export default findOrCreateRoom;
