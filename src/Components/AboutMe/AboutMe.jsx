import React, { useState } from "react";
import "./AboutMe.scss";
import photo from "../../Assets/photoGaetan/photoAboutMe.png";

function AboutMe() {
    const [hoverText, setHoverText] = useState("");

    const handleMouseEnter = (text) => {
        setHoverText(text);
    };

    const handleMouseLeave = () => {
        setHoverText("");
    };

    return (
        <div className="bg">
            <div className="aboutMe">
                <div className="aboutMe_img">
                    <img src={photo} alt="" className={hoverText ? "hidden" : ""} />
                    <div
                    className="hover-text visible"
                    dangerouslySetInnerHTML={{ __html: hoverText }}
                />

                </div>
                <div className="aboutMe_text">
                    <h2>A propos de moi</h2>
                    <div className="listContainer">
                        <div className="list">
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Qui suis-je ?</p>
                                            <ul>
                                                <li>Carré Gaëtan</li>
                                                <li>30 ans</li>
                                                <li>Palavas les flots</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                Qui suis je ?
                            </p>
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Développeur web (RNCP 5)</p>
                                            <ul>
                                                <li>HTML & CSS</li>
                                                <li>Javascript</li>
                                                <li>SEO</li>
                                                <li>React</li>
                                                <li>Node & MongoDB</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                OpenClassRooms
                            </p>
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Parcours :</p>
                                            <ul>
                                                <li>Technicien de l'image</li>
                                                <li>Concepteur / Rédacteur</li>
                                                <li>Maître nageur</li>
                                                <li>Projet d'applications No Code</li>
                                                <li>Formation OpenClassRooms</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                Mon parcours
                            </p>
                            <button className="link">Mon github</button>
                        </div>
                        <div className="list">
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Hobbies :</p>
                                            <ul>
                                                <li>Développement</li>
                                                <li>Projets personnels</li>
                                                <li>Natation</li>
                                                <li>Pop culture</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                Mes hobbies
                            </p>
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Actuellement :</p>
                                            <ul>
                                                <li>Développement d'un site <br /> de productivité</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                Mes projets personnels
                            </p>
                            <p
                                onMouseEnter={() =>
                                    handleMouseEnter(`
                                        <div>
                                            <p>Ambition :</p>
                                            <ul>
                                                <li>Devenir expert en React</li>
                                            </ul>
                                        </div>
                                    `)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                Mon ambition
                            </p>
                            <button className="link">
                                <a className="button" href="/cv_carre_gaetan.pdf" download="CV_Carre_Gaetan.pdf">
                                    Télécharger le CV
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
