interface MessageInputProps {
  localMessage: string;
  setLocalMessage: (value: string) => void;
  sendMessage: () => void;
}



const MessageInput: React.FC<MessageInputProps> = ({
    localMessage,
    setLocalMessage,
    sendMessage,
}) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <form className="chat-form">
        <input
            type="text"
            className="text-input"
            placeholder="Введите ваше сообщение"
            value={localMessage}
            onChange={(e) => setLocalMessage(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <input
            type="button"
            className="submit-button"
            value="Отправить"
            onClick={sendMessage}
        />
        </form>
    );
};

export default MessageInput;