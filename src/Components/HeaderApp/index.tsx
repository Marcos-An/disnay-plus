import styles from './header.module.scss'
import { useState, useEffect } from 'react'
import Menu from '../../Components/Menu'

export default function header() {
  const [positionScrollBar, setPossitionScrollBar] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPossitionScrollBar(window.scrollY)
    })
  })

  return (
    <header className={positionScrollBar > 600 ? styles.header : styles.headerHide}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <Menu />
      <div className={styles.profileWrapper}>
        <p>Lehndona</p>
        <div className={styles.avatar} />
        <div className={styles.optionsWrapper}>
          <div className={styles.options}>
            <div className={styles.divider} />
            <ul>
              <li>
                <div className={styles.moreProfiles}>
                  <img src="/app/plus.svg" alt="plus" />
                </div>
                <span>Adicionar perfil</span>
              </li>
              <li>
                <span>Editar perfis</span>
              </li>
              <li>
                <span>Configurações do aplicativo</span>
              </li>
              <li>
                <span>Conta</span>
              </li>
              <li>
                <span>Ajuda</span>
              </li>
              <li>
                <span>Sair</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}