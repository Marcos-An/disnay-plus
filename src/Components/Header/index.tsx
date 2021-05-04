import styles from './header.module.scss'
import { useState, useEffect } from 'react'


export default function header({ children }) {
  const [positionScrollBar, setPossitionScrollBar] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPossitionScrollBar(window.scrollY)
    })
  })

  return (
    <header className={positionScrollBar > 600 ? styles.header : styles.headerHide}>
      <img src="/logo.svg" alt="logo" />
      {children}
    </header>
  )
}