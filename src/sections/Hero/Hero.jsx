import styles from './HeroStyles.module.css' // Takes the styles from the file called HeroStyles.module.css
import heroImg from '../../assets/Headshot.png' // User profile picture holder
import sun from '../../assets/sun.svg' // Icon image holder for dark and light mode (Light Version)
import moon from '../../assets/moon.svg' // Icon image holder for dark and light mode (Dark Version)
import twitterLight from '../../assets/twitter-Light.png' //Icon image holder for Twitter (Light Version)
import twitterDark from '../../assets/twitter-Dark.png' //Icon image holder for Twitter (Dark Version)
import githubLight from '../../assets/github-Light.png' //Icon image holder for Github (Light Version)
import githubDark from '../../assets/github-Dark.png' //Icon image holder for Github (Dark Version)
import linkedinLight from '../../assets/linkedin-Light.png' //Icon image holder for Linkedin (Light Version)
import linkedinDark from '../../assets/linkedin-Dark.png' //Icon image holder for Linkedin (Dark Version)
import instagramLight from '../../assets/instagram-Dark.png' // Icon image holder for dark and light mode (Light Version)
import instagramDark from '../../assets/instagram-Light.png' // Icon image holder for dark and light mode (Dark Version)
import CV from '../../assets/NathenPaniaguaResume.pdf' // Resume Holder
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark

  return (
    <section id='hero' className={styles.container}>
    <div>
        <img // Profile Picture of the user
          className={styles.colorModeContainer} 
          src={heroImg}
          alt="Profile Picture Of Nathen Paniagua" 
          />
        <img // The Icon for (Light or Dark Mode)
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color Mode Icon" 
          onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}> 
      <h1> 
        Nathen Paniagua
      </h1>

      
      <h2>Software Developer</h2>
      <h2>Data Scientist</h2>
      <h3 className={styles.classInfo}>California State University Fullerton</h3>
      <h3 className={styles.classInfo}>Computer Science</h3>

      <div className={styles.iconRow}>
        <a href="https://x.com/NathenDaPenguin" target='blank'>
      <span href="https://twitter.com/" target="_blank" className='hover'>
        <img src={twitterIcon} alt="Twitter Icon" />
      </span>
      </a>
      <a href="https://github.com/CSUFNathen" target='blank'>
      <span href="https://github.com/" target="_blank" className='hover'>
        <img src={githubIcon} alt="Github Icon" />
      </span>
      </a>
      <a href="https://www.linkedin.com/in/nathen-paniagua-58b5a92b9/" target='blank'>
      <span href="https://linkedin.com/" target="_blank" className='hover'>
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </span>
      </a>
      <a href="https://www.instagram.com/nathendapenguin/" target='blank'>
      <span href="https://instagram.com/" target="_blank" className='hover'>
        <img src={instagramIcon} alt="Instagram Icon" />
      </span>
      </a>

      </div>
      <p className={styles.description}>
       Developing modern Apps and Software with a focus on Data Science implementation, transforming raw data into smart features and predictive models.
      </p>

      <a href={CV} download className={styles.resume}>
        <button className="hover">Resume</button>
      </a>

    </div>
    </section>
  )
} 

export default Hero
