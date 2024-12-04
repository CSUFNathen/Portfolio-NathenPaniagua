import styles from './SkillsStyles.module.css';
import tickDark from '../../assets/tick-dark.png';
import tickLight from '../../assets/tick-light.png';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme(); // Access the current theme

  // Choose the icon based on the theme
  const CheckMarkIcon = theme === 'light' ? tickLight : tickDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList 
          src={CheckMarkIcon} 
          skill="C++" 
        /> 
      </div>

      {/* Line Breaker */}
      <hr /> 

      <div className={styles.skillList}>
        <SkillList 
          src={CheckMarkIcon} 
          skill="HTML" 
        />
        <SkillList 
          src={CheckMarkIcon} 
          skill="CSS" 
        />
      </div>

      {/* Line Breaker */}
      <hr />
    </section>
  );
}

export default Skills;