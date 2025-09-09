interface Message {
  name: string;
  msg: string;
}

interface MessageListProps {
  history: Message[];
  messagesEndRef?: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ history}) => {
    return (
        <div className="message-list">
            {history.map((item, index) => (
                <div key={index} className="message">
                    <span className="textUser">{item.name}</span>
                    <span>{item.msg}</span>
                </div>
            ))}
        </div>
    );
};

export default MessageList;