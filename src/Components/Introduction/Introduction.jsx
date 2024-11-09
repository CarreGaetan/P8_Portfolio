// src/Components/Introduction/Introduction.jsx

import React, { useEffect, useRef } from 'react';
import "./Introduction.scss";
import photo from "../../Assets/photoGaetan/photoIntro.png";

function Introduction() {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = window.VANTA.DOTS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 400.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            showLines: false,
            color: 0xff3f81, // Exemple de personnalisation
            backgroundColor: 0x222222
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div className="vantaBg" ref={vantaRef}>
            <div className="intro" >
                <div className="intro_text">
                    <h1>GAËTAN CARRÉ</h1>
                    <h2>Développeur full stack</h2>
                    <p>Bienvenue sur mon portfolio ! Ici, découvrez mon parcours, mes projets et ma passion pour le développement web, de la conception au déploiement.</p>
                </div>
                <div className="intro_img">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Introduction;
