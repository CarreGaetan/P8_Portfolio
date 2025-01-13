import React, { useState } from "react";
import "./AboutMe.scss";
import photo from "../../Assets/photoGaetan/photoAboutMe.png";

function AboutMe() {
    const [selectedText, setSelectedText] = useState(null);

    const handleClick = (content) => {
        setSelectedText(content);
    };

    const resetSelection = () => {
        setSelectedText(null);
    };

    return (
        <div
            className="bg"
            onClick={resetSelection} // Reset the state when clicking on the background
        >
            <div
                className="aboutMe"
                onClick={(e) => e.stopPropagation()} // Prevent resetting when clicking inside the aboutMe section
            >
                <div className="aboutMe_img">
                    {selectedText ? (
                        <div className="hover-text">{selectedText}</div>
                    ) : (
                        <img src={photo} alt="Gaëtan Carré" />
                    )}
                </div>
                <div className="aboutMe_text">
                    <h2>A propos de moi</h2>
                    <div className="listContainer">
                        <div className="list">
                            <p
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent reset when clicking this element
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Qui suis-je ?</p>
                                            <ul>
                                                <li>Carré Gaëtan</li>
                                                <li>30 ans</li>
                                                <li>Palavas les flots</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                Qui suis-je ?
                            </p>
                            <p
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent reset when clicking this element
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Développeur web (RNCP 5)</p>
                                            <ul>
                                                <li>HTML & CSS</li>
                                                <li>Javascript</li>
                                                <li>SEO</li>
                                                <li>React</li>
                                                <li>Node & MongoDB</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                OpenClassRooms
                            </p>
                            <p
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent reset when clicking this element
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Parcours :</p>
                                            <ul>
                                                <li>Technicien de l'image</li>
                                                <li>Concepteur / Rédacteur</li>
                                                <li>Maître nageur</li>
                                                <li>Projet d'applications No Code</li>
                                                <li>Formation OpenClassRooms</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                Mon parcours
                            </p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent reset when clicking this element
                                    window.open("https://github.com/CarreGaetan", "_blank");
                                }}
                                className="link"
                            >
                                Mon GitHub
                            </button>
                        </div>
                        <div className="list">
                            <p
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Hobbies :</p>
                                            <ul>
                                                <li>Développement</li>
                                                <li>Projets personnels</li>
                                                <li>Natation</li>
                                                <li>Pop culture</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                Mes hobbies
                            </p>
                            <p
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Actuellement :</p>
                                            <ul>
                                                <li>Développement d'un site <br /> de productivité</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                Projets personnels
                            </p>
                            <p
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick(
                                        <div className="hover-text-item">
                                            <p>Ambition :</p>
                                            <ul>
                                                <li>Devenir expert en React</li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                Mon ambition
                            </p>
                            <button className="link">
                                <a
                                    className="button"
                                    href=".cv_carre_gaetan.pdf"
                                    download="CV_Carre_Gaetan.pdf"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Télécharger CV
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
