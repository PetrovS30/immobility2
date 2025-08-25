'use client'
import socket from '@/app/socket';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

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



    const sendMessage = () => {
        if (!localMessage.trim()) {
            return;
        }
        socket.emit('sendMessae', { name: localName, msg: localMessage })
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
        socket.on('liveMsg', (msg) => {
            setHistory((prew) => [...prew, msg])
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

        socket.on('currentUser', data => {
            if (data <= 1) {
                router.push('/loader')
            }
        })
        return () => {
            socket.off('currentUser')
            socket.off('liveMsg');
            socket.emit('chat_leave', localName)
        }
    }, [router, localName]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        localName ? (
            <>
                <div className="chat-container">
                    <div className="container">
                        <div className="chat">
                            <div className="set-message">
                                <audio ref={audioRef}>
                                    <source src='https://zaycev.europium.zerocdn.com/bc43a68fa9baa2a25fa99e1933b20e4b:2025012512/track/24881994.mp3' type="audio/mp3" />
                                    Ваш браузер не поддерживает элемент audio.
                                </audio>
                                <div className="message">
                                    <span className="">Администратор</span>
                                    <span className="">Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                                    {
                                        <div>
                                            {
                                                StandardMessages.map((item, index) => <span key={index} onClick={() => generatePredefinedMessages(item)} className='music'>{item}</span>)
                                            }
                                        </div>
                                    }
                                </div>
                                {

                                    history.map((item, index) => {
                                        return (
                                            <>
                                                <div ref={messagesEndRef} key={index} className="message">
                                                    <span className="textUser">{item.name}</span>
                                                    <span className="">{item.msg}</span>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <form className="chat-form" action="">
                                <input
                                    onChange={(e) => setLocalMessage(e.target.value)}
                                    onClick={() => setInputActive(true)}
                                    className={`text-input ${inputActive ? 'sizeText' : ''}`}
                                    type="text" placeholder="Введите ваше сообшение"
                                    onKeyDown={(event) => handleKeyDown(event)}
                                    value={localMessage}
                                />

                                <input onClick={() => sendMessage()} className="submit-button" type="button" value="Отправить" />

                            </form>
                        </div>
                    </div>
                </div>
            </>
        ) : null

    )
}
export default Chat;