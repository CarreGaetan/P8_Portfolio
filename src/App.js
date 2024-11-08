import './App.scss';
import Header from "./Components/Header/Header.jsx";
import Introduction from "./Components/Introduction/Introduction.jsx";
import Stacks from "./Components/Stacks/Stacks.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useRef } from 'react';

function App() {

  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        scrollToSection={scrollToSection} 
        refs={{ aboutMeRef, projectsRef, contactRef }}
      />
      <div className="Main" style={{ position: "relative" }}>
          <Introduction />
          <Stacks />
      </div>
      <section id='AboutMe' ref={aboutMeRef}> 
        <AboutMe />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer scrollToSection={scrollToSection} 
        refs={{ aboutMeRef, projectsRef, contactRef }} />
    </div>
  );
}

export default App;
