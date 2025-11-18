import styles from './AboutMeStyles.module.css';

function AboutMe() {
  return (

    <section id="about" className={styles.container}>

      <h1 className="sectionTitle">About Me</h1>
      
      <p className={styles.aboutText}>
        Hello, my name is Nathen Paniagua. I’m currently a third-year Computer Science major with a minor in Data Science at California State University Fullerton, with plans to graduate in Spring 2027. 
        My goal is to become a software engineer or Data Scientist. My interest in computer science really started when I got into playing and creating video games, I even took video game design courses 
        in high school, which pulled me in even more. Outside of tech, I enjoy playing video games, watching and playing sports, and just staying active overall.
      </p>
    </section>
  );
}

export default AboutMe;
