import "./App.css";
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/Footer/Footer"
import AboutMe from "./sections/About Me/AboutMe";

function App() {
  return (
    <>
      <Hero />
      <AboutMe /> 
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
