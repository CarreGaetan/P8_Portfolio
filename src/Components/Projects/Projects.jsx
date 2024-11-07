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
        { name: 'Booki', image: booki, stacks: ['HTML', 'CSS'] },
        { name: 'Sophie Bluel', image: sophieBluel, stacks: ['Javascript'] },
        { name: 'Nina Carducci', image: ninaCarducci, stacks: ['SEO'] },
        { name: 'Kasa', image: kasa, stacks: ["REACT", "SCSS"] },
        { name: 'Mon vieux grimoire', image: monVieuxGrimoire, stacks: ['NODE'] }
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
                            <div className="project_item" key={index}>
                                <h3>{project.name}</h3>
                                <img src={project.image} alt={`Projet ${project.name}`} />
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
                    <div className='next' onClick={goToNext}>
                        <img src={rightArrow} alt="Next" />
                    </div>
                </div>
            ) : (
                <div className="project grid-mode">
                    {projectsData.map((project, index) => (
                        <div className="project_item" key={index}>
                            <h3>{project.name}</h3>
                            <img src={project.image} alt={`Projet ${project.name}`} />
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
