import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Mi Portafolio</h1>
            <nav className="header-nav">
                <a href="#about" className="nav-link">Sobre mí</a>
                <a href="#projects" className="nav-link">Proyectos</a>
                <a href="#contact" className="nav-link">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;
