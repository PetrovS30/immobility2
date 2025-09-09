'use client'

import AudioPlayer from './AudioPlayer';
import ChatHeader from './ChatHeader';
import PredefinedMessages from './PredefinedMessages';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import { useChat } from './useChat'
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

import { RootState } from '@/app/redux/store';
import socket from '../socket';

import './style.scss';

interface Message {
    name: string;
    msg: string;
}

const Chat = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const router = useRouter()
    const { localName } = useSelector((state: RootState) => state.data);
    const [localMessage, setLocalMessage] = useState<string>('');
    const [history, setHistory] = useState<Message[]>([])
    const StandardMessages: string[] = ['Хочу Музыку', 'Как дела?'];
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useChat({localName,setHistory});

    const sendMessage = () => {
        if (!localMessage.trim()) {
            return;
        }

        socket.emit('chatMessage', { localName, localMessage });
        setLocalMessage('');

        setHistory(prevHistory => {
            if (prevHistory.length > 10) {
                return prevHistory.slice(1); // Удаляем первое сообщение
            }
            return prevHistory;
        });
    }

    const getLiveMessages = () => {
        socket.on('message', (msg) => {
            const { localName, localMessage } = msg;
            console.log(localMessage);

            setHistory((prew) => [...prew, { name: localName, msg: localMessage }])
        })
    };
    
    const isMusicMessagePresent = history.some((item) => item.msg === 'Хочу Музыку');

    useEffect(() => {
        if (audioRef.current && isMusicMessagePresent) {
            audioRef.current.play();
        }
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history, isMusicMessagePresent]);


    useEffect(() => {
        getLiveMessages()
        if (!localName) {
            router.push('/');
        }
        return () => {
            socket.off('joinRoom')
            socket.off('message')
            socket.emit('exit', localName)
        }
    }, [router, localName]);



    return (
        <div className="chat-container">
            <div className="container">
                <div className="chat">
                    <div className="set-message">
                        <AudioPlayer ref={audioRef}/>
                        <ChatHeader/>
                        <PredefinedMessages 
                            messages={StandardMessages} 
                            onSelect={(msg) => setLocalMessage(msg)}/>
                        <MessageList history={history}  />
                    </div>
                    <MessageInput   
                        localMessage={localMessage}
                        setLocalMessage={setLocalMessage}
                        sendMessage={sendMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
