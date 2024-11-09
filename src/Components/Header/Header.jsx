import React, { useState } from "react";
import "./Header.scss";
import photo from "../../Assets/photoGaetan/image.png";

function Header({ scrollToSection, refs }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <div className="logo">
                <img src={photo} alt="Logo du site" />
                <div className="logo_name">
                    <p className="name">Gaëtan Carré</p>
                    <p>Développeur web</p>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <nav>
                <ul className={menuOpen ? "active" : ""}>
                    <li><button onClick={() => { scrollToSection(refs.aboutMeRef); setMenuOpen(false); }}>A propos</button></li>
                    <li><button onClick={() => { scrollToSection(refs.projectsRef); setMenuOpen(false); }}>Projets</button></li>
                    <li><button onClick={() => { scrollToSection(refs.contactRef); setMenuOpen(false); }}>Contact</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
