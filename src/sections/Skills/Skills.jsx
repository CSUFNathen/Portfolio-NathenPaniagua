import styles from './SkillsStyles.module.css'
import CheckMarkIcon from '../../assets/tick-dark.png'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>

            <SkillList 
            src={CheckMarkIcon} 
            skill="C++"
            /> 

        </div>

        {/* Line Braker */}
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

        {/* Line Braker */}
        <hr />

    </section>
  )
}

export default Skills
