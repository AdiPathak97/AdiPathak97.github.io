import { siteData } from '@/data/site'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className="section section-border" id="experience">
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title reveal">Where I&apos;ve built.</h2>

      <div className={styles.list}>
        {siteData.experience.map((job, i) => (
          <div key={i} className={`${styles.item} reveal`}>
            <div className={styles.header}>
              <div className={styles.left}>
                <div className={styles.company}>{job.company}</div>
                <div className={styles.role}>{job.role}</div>
              </div>
              <div className={styles.right}>
                <div className={styles.period}>{job.period}</div>
                <span className={`${styles.badge} ${job.current ? styles.current : styles.past}`}>
                  {job.current ? 'Current' : 'Past'}
                </span>
              </div>
            </div>

            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>
                  <span className={styles.arrow}>→</span>
                  <span dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
