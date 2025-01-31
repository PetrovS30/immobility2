"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import socket from '@/app/socket';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Marquee from 'react-fast-marquee';


import './style.scss'
const Loader = () => {
    const userConfig = useSelector((name: RootState) => name.data);
    const audio = typeof Audio !== "undefined" ? new Audio('./music1.mp3') : null;
    const router = useRouter()

    const ConnectToChat = () => {
        socket.emit('createRoom', userConfig);
    }
    useEffect(() => {

        if (audio) {
            audio.play();
            audio.volume = 0.03;
        }

        if (!userConfig.localName) {
            router.push('/');
        } else {
            ConnectToChat();
        }

        socket.on('roomState', (data) => data > 1 && router.push('/chat'));

        return () => {
            socket.off('roomState');
            audio?.pause();
        };
    }, [router]);
    const quotes = [
        "Каждый новый человек в твоей жизни — это космос, полный звёзд, которые ты ещё не видел.",
        "Дружба — это редкий дар, который не принадлежит ни времени, ни пространству.",
        "Некоторые люди появляются как ветер — слегка касаются и меняют твоё направление навсегда.",
        "В тишине друзей больше мудрости, чем в тысяче громких слов.",
        "Друзья — это те, кто слышит музыку твоей души, даже когда ты сам забыл её мелодию.",
        "Каждый друг — это отражение тебя самого, но в новой, неожиданной интерпретации.",
        "Новые люди — это загадки, ответы на которые всегда немного о нас самих.",
        "Незнакомцы — это как книги в библиотеке: ты никогда не знаешь, какая история изменит твою жизнь.",
        "Встреча с другим человеком — это диалог двух вселенных, где истина рождается на границе их столкновения.",
        "Настоящий друг — это не тот, кто идёт с тобой в свет, а тот, кто не отпускает твою руку в темноте."
    ];
    return userConfig.localName ? (
        <>
            <div className="container">
                <div className="loader">
                    <p>Соединение с чатом устанавливается. Скоро начнём!</p>
                </div>
            </div>
            <Marquee className="lenta" speed={40} gradient={false} pauseOnHover={false}>
                {quotes.map((item, index) => (
                    <div key={index} className="logo-slide">
                        <span>{item}</span>
                    </div>
                ))}
            </Marquee>
        </>
    ) : null;

}
export default Loader;