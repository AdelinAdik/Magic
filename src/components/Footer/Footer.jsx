import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="footer__inner">
                <Link to="/" className="footer__logo">
                   <img src="src/assets/logot.jpg" alt="" width={50}/>
                </Link>
                <nav className="footer__nav nav">
                    <NavLink to="/" className="nav__link">Главная</NavLink>
                    <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                    <NavLink to="/about" className="nav__link">О нас</NavLink>
                </nav>
            </div>
        </div>
    </footer>
    );
}