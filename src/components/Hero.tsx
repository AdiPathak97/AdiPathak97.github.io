import { siteData } from '@/data/site'
import styles from './Hero.module.css'

export default function Hero() {
  const { name, role, tagline, email, github, linkedin } = siteData

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>
          {name.split(' ')[0]}<br />
          <span className={styles.accent}>{name.split(' ')[1]}</span>
        </h1>

        <p className={styles.role}>{role}</p>
        <p className={styles.tagline}>{tagline}</p>

        <div className={styles.actions}>
          <a href={`mailto:${email}`} className="btn btn-primary">
            Get in touch →
          </a>
          <a href={github} className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Terminal — hidden on mobile via CSS */}
      <div className={styles.terminal} aria-hidden="true">
        <div className={styles.termBar}>
          <span className={`${styles.termDot} ${styles.r}`} />
          <span className={`${styles.termDot} ${styles.y}`} />
          <span className={`${styles.termDot} ${styles.g}`} />
          <span className={styles.termTitle}>aditya@commtel ~</span>
        </div>
        <div className={styles.termBody}>
          <div className={styles.comment}>{'// who am I?'}</div>
          <div><span className={styles.kw}>const</span> engineer = {'{'}</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>name</span>: <span className={styles.str}>&quot;Aditya Pathak&quot;</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>role</span>: <span className={styles.str}>&quot;Senior Full Stack&quot;</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>yoe</span>: <span className={styles.num}>6</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>current</span>: <span className={styles.str}>&quot;Commtel Networks&quot;</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>focus</span>: [</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.str}>&quot;Rust&quot;</span>, <span className={styles.str}>&quot;Real-time&quot;</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.str}>&quot;Microservices&quot;</span></div>
          <div>&nbsp;&nbsp;],</div>
          <div>&nbsp;&nbsp;<span className={styles.key}>location</span>: <span className={styles.str}>&quot;Mumbai, India&quot;</span></div>
          <div>{'};'}<span className={styles.cursor} /></div>
        </div>
      </div>
    </section>
  )
}
