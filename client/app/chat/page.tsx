'use client'
import socket from '@/app/socket';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
interface Message {
    name: string;
    msg: string;
}
const Chat = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const router = useRouter()
    const { localName, currentPath } = useSelector((name: any) => name.data);
    const [localMessage, setLocalMessage] = useState<string>('');
    const [history, setHistory] = useState<Message[]>([])
    const [StandardMessages, setStandardMessages] = useState(['Хочу Музыку', 'Как дела?']);
    const [inputActive, setInputActive] = useState<boolean>(false)

    const sendMessage = () => {
        socket.emit('sendMessae', localMessage)
    }

    const generatePredefinedMessages = (item: string) => {
        socket.emit('sendMessae', item)
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
    }, [history]);

    useEffect(() => {
        getLiveMessages()
        socket.on('currentUser', data => {
            if (data <= 2) {
                router.push('/loader')
            }
        })
        return () => {
            socket.off('currentUser')
            socket.off('liveMsg');
            socket.emit('chat_leave', localName)
        }
    }, [router]);

    return (
        <>
            <div className="chat-container">
                <div className="container">
                    <div className="chat">
                        <div>
                            <a href="">Завершить чат</a>
                            <a href="">Пожаловаться</a>
                        </div>
                        <div className="set-message">
                            <audio ref={audioRef} loop>
                                <source src="https://zaycev.fobetor.zerocdn.com/9ca97a498a9ec12f700350cbbfcc7e0e:2025011916/track/24972322.mp3" type="audio/mp3" />
                                Ваш браузер не поддерживает элемент audio.
                            </audio>
                            <div className="message">
                                <span className="">Администратор</span>
                                <span className="">Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                                {
                                    <div>
                                        {
                                            StandardMessages.map((item) => <span onClick={() => generatePredefinedMessages(item)} className='music'>{item}</span>)
                                        }

                                    </div>
                                }
                            </div>
                            {
                                history.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="message">
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
                                type="text" placeholder="Введите ваше сообшение" />
                            <input onClick={() => sendMessage()} className="submit-button" type="button" value="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;