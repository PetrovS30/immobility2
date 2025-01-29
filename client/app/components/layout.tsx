"use client"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Header from './header';
import { useDispatch } from 'react-redux';
import { setPageLog } from '../redux/slice';
import socket from '@/app/socket';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    useEffect(() => {
        socket.emit('path', pathname)
        dispatch(setPageLog(pathname))
    }, [pathname]);
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
