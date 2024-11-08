import "./Footer.scss"

function Footer({ scrollToSection, refs }) {
    return (
        <footer>
            <nav>
                <ul>
                    <li><button onClick={() => scrollToSection(refs.aboutMeRef)}>A propos</button></li>
                    <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projets</button></li>
                    <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
                </ul>
            </nav>
            <p>© 2024 Carré Gaëtan, Tous droits réservés.</p>
        </footer>
    )
}

export default Footer