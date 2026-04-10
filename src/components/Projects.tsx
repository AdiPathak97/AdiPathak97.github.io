import { siteData } from '@/data/site'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className="section section-border" id="projects">
      <div className="section-label">03 — Projects</div>
      <h2 className="section-title reveal">Things I&apos;ve shipped.</h2>

      <div className={styles.grid}>
        {siteData.projects.map(project => (
          <div key={project.name} className={`${styles.card} reveal`}>
            <div className={styles.topBar} />
            <div className={styles.name}>{project.name}</div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tech}>
              {project.tech.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              href={project.link}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel} →
            </a>
          </div>
        ))}

        {/* GitHub CTA card */}
        <div className={`${styles.card} ${styles.cardAlt} reveal`}>
          <div className={styles.topBar} />
          <div className={styles.name}>More on GitHub</div>
          <p className={styles.desc}>
            Check out my GitHub for more projects across distributed systems, real-time
            applications, and open-source contributions.
          </p>
          <div className={styles.tech}>
            {['Rust', 'TypeScript', 'Python', 'React'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a
            href={siteData.github}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            github.com/AdiPathak97 →
          </a>
        </div>
      </div>
    </section>
  )
}
