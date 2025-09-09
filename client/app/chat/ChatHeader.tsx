import socket from "../socket";


interface ChatHeaderProps {
    exitChat: () => void;
}

const exitChat = () => {
    socket.emit('exitChat'); // уведомляем сервер
};

const ChatHeader = () => {
    return (
        <div className='chat-actions'>
            <div className='chat-end'>
                <img src='/logo/chat-end.svg' alt="chat-end" />
                <button  className='chat-end-btn' onClick={exitChat}>Завершить чат</button>
            </div>
            <div className='chat-report'>
                <img src='/logo/chat-report.svg' alt="chat-report" />
                <button className='chat-report-btn'>Пожаловаться</button>
            </div>
        </div>
    )
};

export default ChatHeader;