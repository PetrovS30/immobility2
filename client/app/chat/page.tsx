'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetChatState } from '../redux/slice';

import { RootState } from '@/app/redux/store';
import socket from '../socket';

import './style.scss'

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
    const [inputActive, setInputActive] = useState<boolean>(false)
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch();

    const sendMessage = () => {
        if (!localMessage.trim()) {
            return;
        }
        socket.emit('chatMessage', { localName, localMessage })
        setLocalMessage('')
        setHistory(prevHistory => {
            if (prevHistory.length > 10) {
                return prevHistory.slice(1); // Удаляем первое сообщение
            }
            return prevHistory;
        });
    }

    const generatePredefinedMessages = (item: string) => {
        setLocalMessage(item)
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
        const handleExit = (size: number) => {
            console.log('❗ Второй участник вышел, осталось:', size);
            if (size < 2) {
            router.push('/');
            }
        };

        socket.on('exit', handleExit);

        return () => {
            socket.off('exit', handleExit);
        };
    }, []);


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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    const resetLocalState = () => {
        setLocalMessage('');
        setHistory([]);
        setInputActive(false);
    };

    const exitChat = () => {
        socket.emit('exitChat'); // уведомляем сервер
    };


    socket.on('chatEnded', (msg: string) => {
        console.log('Сервер завершил чат:', msg);
        dispatch(resetChatState()); 
        resetLocalState();
        router.push('/');
    });

    

    return (
        <div className="chat-container">
            <div className="container">
                <div className="chat">
                    <div className="set-message">
                        <audio ref={audioRef}>
                            <source src='https://zaycev.europium.zerocdn.com/bc43a68fa9baa2a25fa99e1933b20e4b:2025012512/track/24881994.mp3' type="audio/mp3" />
                            Ваш браузер не поддерживает элемент audio.
                        </audio>
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
                        <div className="message">
                            <span>Администратор</span>
                            <span>Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                            <div>
                                {StandardMessages.map((item, index) => (
                                    <span key={index} onClick={() => generatePredefinedMessages(item)} className='music'>{item}</span>
                                ))}
                            </div>
                        </div>
                        {history.map((item, index) => (
                            <div ref={messagesEndRef} key={index} className="message">
                                <span className="textUser">{item.name}</span>
                                <span>{item.msg}</span>
                            </div>
                        ))}
                    </div>
                    <form className="chat-form" action="">
                        <input
                            onChange={(e) => setLocalMessage(e.target.value)}
                            onClick={() => setInputActive(true)}
                            className={`text-input ${inputActive ? 'sizeText' : ''}`}
                            type="text"
                            placeholder="Введите ваше сообщение"
                            onKeyDown={handleKeyDown}
                            value={localMessage}
                        />
                        <input onClick={sendMessage} className="submit-button" type="button" value="Отправить" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Chat;