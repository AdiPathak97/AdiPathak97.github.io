import { siteData } from '@/data/site'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className="section section-border" id="skills">
      <div className="section-label">01 — Skills</div>
      <h2 className="section-title reveal">The toolbox.</h2>
      <div className={`${styles.grid} reveal`}>
        {siteData.skills.map(group => (
          <div key={group.category} className={styles.group}>
            <div className={styles.groupName}>{group.category}</div>
            <div className={styles.tags}>
              {group.items.map(item => (
                <span key={item} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
