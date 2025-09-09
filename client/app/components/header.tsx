import Link from 'next/link';
import socket from '../socket';
import { useEffect, useState } from 'react';

const Header = () => {
    const [totalMembers, setTotalMembers] = useState();

    useEffect(() => {
        socket.on('onlineCount', (count) => {
            setTotalMembers(count);
        });

        return () => {
            socket.off('onlineCount');
        };
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className='header-logo'>
                        <Link href="/" className="logo">
                            <img src="/immobility.svg" alt="БезДвижения" />
                        </Link>
                        <span style={{color: 'white'}}>
                            Сейчас онлайн:  {totalMembers ? totalMembers : 'Данные отсутствуют'} 
                        </span>
                        </div>
                        <nav className='navigation'>
                            <Link href="/main" className="active">Главная</Link>
                            <Link href="/aboutUs" className="active">О нас</Link>
                            <Link href="/contacts" className="active">Контакты</Link>
                            <Link href="/faq" className="active">FAQ</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;