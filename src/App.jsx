
import './App.css'
import TitleBar from './TitleBar'
import IntroCard from './IntroCard'
import TechStack from './TechStack/TechStack'
import AboutMe from './AboutMe/AboutMe'
import PersonalProjects from './Projects/PersonalProjects'
import ContactMe from './ContactMe/ContactMe'

function App() {

  return (
    <>
      <TitleBar/>
      <IntroCard/>
      <TechStack/>
      <PersonalProjects/>
      <AboutMe/>
      <ContactMe/>
    </>
  )
}

export default App
