// import logo from '../../src/assets/image/БЕЗДВИЖЕНИЯ.svg';
import Link from 'next/link';
const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <link className="logo" href="/">
                            {/* <img src={logo} alt="БезДвижения" /> */}
                        </link>
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