import styles from './AboutMeStyles.module.css';

function AboutMe() {
  return (

    <section id="about" className={styles.container}>

      <h1 className="sectionTitle">About Me</h1>
      
      <p className={styles.aboutText}>
        Hello, my name is Nathen Paniagua. I’m currently a second-year Computer Science major at California State University Fullerton, with plans to graduate in Spring 2027. 
        My goal is to become a software engineer or web developer. My interests in programming began when I was younger through video game development, which led me to explore 
        game design extensively. During high school, I took a game design electives that introduced me to various tools, from Scratch to Unity, and even virtual reality. 
        This hands-on experience deepened my interest in technology and programming. As I approached college, I chose to pursue Computer Science because it aligns with 
        my interest in technology and programming, but on a broader scale. While game design remains a hobby of mine, I’m excited about the opportunities in software 
        engineering, where I can develop applications that impact a wide range of users. Thank you for visiting my website and learning about my journey so far.
      </p>
    </section>
  );
}

export default AboutMe;
