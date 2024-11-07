import "./Header.scss";
import photo from "../../Assets/photoGaetan/image.png";

function Header({ scrollToSection, refs }) {
    return (
        <header>
            <div className="logo">
                <img src={photo} alt="Logo du site" />
                <div className="logo_name">
                    <p className="name">Gaëtan Carré</p>
                    <p>Développeur web</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><button onClick={() => scrollToSection(refs.aboutMeRef)}>A propos</button></li>
                    <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projets</button></li>
                    <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
