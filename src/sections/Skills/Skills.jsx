import styles from './SkillsStyles.module.css';
import checkMarkDark from '../../assets/tick-dark.png';
import checkMarkLight from '../../assets/tick-light.png';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();

  const CheckMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList 
          src={CheckMarkIcon} 
          skill="C++" 
        /> 
        <SkillList 
          src={CheckMarkIcon} 
          skill="Python" 
        /> 
        <SkillList 
          src={CheckMarkIcon} 
          skill="Swift" 
        /> 
        <SkillList 
          src={CheckMarkIcon} 
          skill="JavaScript" 
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
        <SkillList 
          src={CheckMarkIcon} 
          skill="Tailwind CSS" 
        /> 
        <SkillList 
          src={CheckMarkIcon} 
          skill="Node.js" 
        /> 
      </div>

      {/* Line Breaker */}
      <hr />
    </section>
  );
}

export default Skills;
