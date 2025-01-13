import './Projects.scss';
import { useState } from 'react';
import booki from "../../Assets/imagesProjets/bookiDetailsScreen.png";
import sophieBluel from "../../Assets/imagesProjets/sophieBluel.png";
import ninaCarducci from "../../Assets/imagesProjets/ninaCarducci.png";
import kasa from "../../Assets/imagesProjets/kasa.png";
import monVieuxGrimoire from "../../Assets/imagesProjets/monVieuxGrimoire.png";
import leftArrow from '../../Assets/leftArrow.png';
import rightArrow from '../../Assets/rightArrow.png';

function Projects() {
    const [viewMode, setViewMode] = useState('carrousel');
    const [currentIndex, setCurrentIndex] = useState(0);

    const projectsData = [
        { name: 'Booki', image: booki, stacks: ['HTML', 'CSS'], url: 'https://github.com/CarreGaetan/P2_Booki', description: "Lors de ce projet, j'avais pour mission d'intégrer l'interface responsive du site Booki. Pour le réaliser, j'avais à disposition les maquettes Figma pour mobile, tablette et desktop, ainsi que les images et une note de synthèse sur les spécificités du projet." },
        { name: 'Sophie Bluel', image: sophieBluel, stacks: ['Javascript'], url: 'https://github.com/CarreGaetan/P3_Sophie_Bluel', description: "Ma mission sur ce projet était de créer une page web dynamique pour le site internet d'une architecte en utilisant JavaScript et en communiquant avec une API. Je devais récupérer les informations d'un backend, recréer la galerie et mettre en place un CRUD." },
        { name: 'Nina Carducci', image: ninaCarducci, stacks: ['SEO'], url: 'https://github.com/CarreGaetan/P4_Nina_Carducci', description: "Ici, j'avais pour mission d'optimiser le référencement d’un site, en améliorant sa performance et son accessibilité en faisant un audit avec Lighthouse, puis en optimisant les ressources du site." },
        { name: 'Kasa', image: kasa, stacks: ["REACT", "SCSS"], url: 'https://github.com/CarreGaetan/P5_kasa', description: "Pour ce projet, j'avais pour mission d'implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive." },
        { name: 'Mon vieux grimoire', image: monVieuxGrimoire, stacks: ['NODE'], url: 'https://github.com/CarreGaetan/P6_monVieuxGrimoire', description: "Pour ce site, j'avais pour mission de développer le back-end d'un site de notation de livres, en créant une base de données et en configurant les routes API, l'authentification ainsi le téléchargement de fichiers." }
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="projects">
            <div className='projects_title'>
                <h2>Mes projets</h2>
            </div>
            <div className="projects_view">
                <div 
                    className={`view-button carrousel ${viewMode === 'carrousel' ? 'active' : ''}`}
                    onClick={() => setViewMode('carrousel')}
                >
                    <p>Carrousel</p>
                </div>
                <div 
                    className={`view-button grid ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                >
                    <p>Grille</p>
                </div>
            </div>

            {viewMode === 'carrousel' ? (
                <div className="project carrousel-mode">
                    <div className='previous' onClick={goToPrevious}>
                        <img src={leftArrow} alt="Previous" />
                    </div>
                    {/* Conteneur de carrousel */}
                    <div className="carousel_container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projectsData.map((project, index) => (
                            <div className="project_item" key={index} >
                                <h3>{project.name}</h3>
                                <img onClick={() => window.open(project.url, '_blank')} src={project.image} alt={`Projet ${project.name}`} />
                                <div className="tags">
                                {project.stacks.map((stack, idx) => (
                                    <p key={idx} className={`${stack.toLowerCase()}_${viewMode}`}>
                                        {stack}
                                    </p>
                                ))}
                                </div>
                                <div className='description'>{project.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className='next' onClick={goToNext}>
                        <img src={rightArrow} alt="Next" />
                    </div>
                </div>
            ) : (
                <div className="project grid-mode">
                    {projectsData.map((project, index) => (
                        <div className="project_item" key={index}>
                            <h3>{project.name}</h3>
                            <img onClick={() => window.open(project.url, '_blank')} src={project.image} alt={`Projet ${project.name}`} />
                            <div className="tags">
                                {project.stacks.map((stack, idx) => (
                                    <p key={idx} className={`${stack.toLowerCase()}_${viewMode}`}>
                                        {stack}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Projects;
