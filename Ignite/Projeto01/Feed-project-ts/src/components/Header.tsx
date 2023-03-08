import React from 'react'
import styles from "./Header.module.css"
import igniteLogo from "../assets/igniteLogo.svg"

export const Header = () => {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong>Ignite Feed</strong>
    </header>
  )
}
