import styles from './ProjectsStyles.module.css'
import project1 from '../../assets/project-website-profile.png' // Project #1 Profile image
import project2 from '../../assets/FrozenFunctions.png' // Project #2 Profile image
import project3 from '../../assets/hipsster.png' // Project #3 Profile image
import project4 from '../../assets/fitlift.png' // Project #3 Profile image
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>

        <ProjectCard src={project1} 
        link={"https://github.com/CSUFNathen/Portfolia-NathenPaniagua"} 
        h3={"Portfolio Website"}
        p={"Developed a professional Portfolio Website, incorporating all essential components typically required for a complete and engaging portfolio."} 
        />

        <ProjectCard src={project2} 
        link={"https://github.com/DanielAkala/FrozenFunctions"} 
        h3={"FrozenFunctions"}
        p={"FrozenFunctions is a Gemini-Integrated Smart Fridge Assistant. A full-stack iOS application designed to reduce food waste and simplify meal planning. The app manages a local inventory of ingredients and uses generative AI to provide real-time, personalized recipe suggestions based on what is currently in the user's fridge."}
        />

        {/* | Project Place Holder |
        <ProjectCard src={project3} 
        link={"https://github.com/CSUFNathen/Portfolia-NathenPaniagua"} 
        h3={"Project Name"}
        p={"Project Description"}
        /> 

        <ProjectCard src={project4} 
        link={"https://github.com/CSUFNathen/Portfolia-NathenPaniagua"} 
        h3={"Project Name"}
        p={"Project Description"}
        /> 
        */}


    </div>
    </section>
  )
}

export default Projects
