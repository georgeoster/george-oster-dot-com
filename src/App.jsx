import { useRef, useState } from 'react';
import './App.css';
import TitleBar from './TitleBar';
import IntroCard from './IntroCard';
import TechStack from './TechStack/TechStack';
import AboutMe from './AboutMe/AboutMe';
import PersonalProjects from './Projects/PersonalProjects';
import ContactMe from './ContactMe/ContactMe';

function App() {
  const projectsRef = useRef();
  const contactMeRef = useRef();
  const [flashContact, setFlashContact] = useState(false);
  const [flashPersonalProjects, setFlashPersonalProjects] = useState(false);


  return (
    <>
      <TitleBar />
      <IntroCard />
      <TechStack
        projectsRef={projectsRef}
        setFlashPersonalProjects={setFlashPersonalProjects}
        contactMeRef={contactMeRef}
        setFlashContact={setFlashContact}
      />
      <PersonalProjects
        ref={projectsRef}
        flash={flashPersonalProjects}
      />
      <AboutMe />
      <ContactMe
        ref={contactMeRef}
        flash={flashContact}
      />
    </>
  );
}

export default App;
