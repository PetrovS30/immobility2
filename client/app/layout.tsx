'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Убедитесь, что путь к store правильный
import Layout from './components/layout'; // Layout, который оборачивает основной контент
import '../app/globals.scss';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
