import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import socket from '../socket';

interface Message {
  name: string;
  msg: string;
}

interface UseChatParams {
  localName: string;
  setHistory: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const useChat = ({
    localName,
    setHistory,
}: UseChatParams) => {
  const router = useRouter();

  useEffect(() => {
        if (!localName) {
            router.push('/');
            return;
        }

    const handleMessage = (msg: Message) => {
        setHistory((prev) => [...prev, msg]);
    };

    const handleExit = (size: number) => {
        console.log('❗ Второй участник вышел, осталось:', size);
        if (size < 2) {
            router.push('/');
        }
    };

    const handleChatEnded = (msg: string) => {
        console.log('Сервер завершил чат:', msg);
        router.push('/');
    };

    const handleForcedExit = () => {
        router.push('/loader');
    };

    socket.on('chatEnded', (msg: string) => {
        console.log('Сервер завершил чат:', msg);
        router.push('/');
    });

    socket.on('exit', ()  => {
        router.push('/loader');
    });

    socket.on('message', handleMessage);
    socket.on('exit', handleExit);
    socket.on('chatEnded', handleChatEnded);
    socket.on('exit', handleForcedExit);

    return () => {
        socket.off('message', handleMessage);
        socket.off('exit', handleExit);
        socket.off('chatEnded', handleChatEnded);
        socket.off('exit', handleForcedExit);
        socket.emit('exit', localName);
    };
  }, [localName]);
};