"use client"
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Header from './header';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useDispatch } from 'react-redux';
import { setPageLog } from '../redux/slice';
import socket from '@/app/socket';

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
