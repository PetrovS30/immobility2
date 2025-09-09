interface PredefinedMessagesProps {
    messages: string[];
    onSelect: (message: string) => void;
}

const PredefinedMessages: React.FC<PredefinedMessagesProps> = ({ messages, onSelect }) => {
    return (
        <div className="message">
            <span>Администратор</span>
            <span>Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
            <div>
                {messages.map((item, index) => (
                    <span
                        key={index}
                        onClick={() => onSelect(item)}
                        className="music"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PredefinedMessages;