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
    }, [history, isMusicMessagePresent]);

    useEffect(() => {
        getLiveMessages()
        socket.on('currentUser', data => {
            console.log(data);

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
                                <source src='https://s456vlx.storage.yandex.net/get-mp3/7bf20a527aee419f3c3e734712909c0d/00062c390ae91243/rmusic/U2FsdGVkX185q5UmRpAlOsNJ6JifyAePDubjNsd-HL0Bn-e_Syp96X7czhxjw-GhBRtEUXbxIBbRrgzosAN8FRtfoaxjgDN_bvr51h__rrY/500ae3ac6fe7c1051fc91257fab109ae06dc25cdc7c4279d05b96ffbca43451e/29331?track-id=111440168&play=false' type="audio/mp3" />
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