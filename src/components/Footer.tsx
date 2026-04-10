import { siteData } from '@/data/site'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {siteData.name}</span>
      <span className={styles.mid}>
        {siteData.location}
        <span className={styles.dot}>·</span>
        <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
      </span>
      <span className={styles.right}>
        Built with Next.js · Deployed on GitHub Pages
      </span>
    </footer>
  )
}
