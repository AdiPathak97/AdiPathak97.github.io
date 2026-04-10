'use client'

import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            ap<span>.dev</span>
          </div>

          {/* Desktop links */}
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => handleLink(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${open ? styles.active : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.drawerLink} onClick={e => handleLink(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:apathak1997@gmail.com" className={styles.drawerCta}>
            Get in touch →
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  )
}
