"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import socket from '@/app/socket';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import './style.scss'
const Loader = () => {
    const userConfig = useSelector((name: RootState) => name.data);
    const router = useRouter()

    const ConnectToChat = () => {
        socket.emit('createRoom', userConfig);
    }
    useEffect(() => {
        ConnectToChat();
        socket.on('roomState', data => data > 1 && router.push('/chat'));
        return () => {
            socket.off('roomState')
        }
    }, [router]);

    return (
        <>
            <>
                <div className="container">
                    <div className="loader">
                        <p>Соединение с чатом устанавливается. Скоро начнём!</p>
                    </div>

                </div>
            </>
        </>
    )
}
export default Loader;