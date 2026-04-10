import { siteData } from '@/data/site'
import styles from './Contact.module.css'

export default function Contact() {
  const { email, github, linkedin } = siteData

  return (
    <section className={`section section-border ${styles.contact}`} id="contact">
      <div className={`section-label ${styles.labelCenter}`}>04 — Contact</div>
      <h2 className={`section-title reveal ${styles.title}`}>Let&apos;s build something.</h2>
      <p className={`reveal ${styles.sub}`}>
        Open to interesting full-stack and systems engineering roles.
        Always happy to talk about Rust, real-time systems, or distributed architecture.
      </p>
      <div className={`reveal ${styles.links}`}>
        <a href={`mailto:${email}`} className="btn btn-primary">{email}</a>
        <a href={linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={github} className="btn btn-ghost" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
