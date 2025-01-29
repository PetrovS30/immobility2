'use client';

import { useState } from 'react';
import './style.scss';
import icon_1 from './icon_1.png';
import icon_2 from './icon_2.png';
import Image from 'next/image';

console.log(icon_1);


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);


    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Переключение активного состояния
    };

    const items = [
        {
            id: 1,
            answer: 'Я беспокоюсь о своей приватности. Как вы обеспечиваете анонимность на сайте?',
            content: 'Ответ: Мы предоставляем опции для анонимной регистрации и общения. Ваша личная информация остается защищенной, и вы решаете, что и когда делиться с другими пользователями.'
        },
        {
            id: 2,
            answer: 'Какие меры безопасности вы принимаете для защиты данных пользователей?',
            content: 'Ответ: Мы используем современные методы шифрования данных и регулярно обновляем системы безопасности для предотвращения утечек информации.'
        },
    ];


    return (
        <div className="container">
            <div className="faq">
                {
                    items.map(({ id, answer, content }, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div key={id} className="faq_block_first" onClick={() => handleToggle(index)}>
                                <div className='faq-header'>
                                    <span className='faq_block-text'>{answer}</span>
                                    <Image className='icon' src={isActive ? icon_1 : icon_2} alt="icon" />
                                </div>

                                <span className={`faq_block-text ${isActive ? ' faq-content-show' : 'faq-content'}`}>{content}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Faq;

