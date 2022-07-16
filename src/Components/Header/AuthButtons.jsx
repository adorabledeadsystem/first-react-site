import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  return (
    <div className={styles.auth}>
        <span><Link to="/AuthPage">Зарегистрироваться</Link> / <Link to="/AuthPage">Войти</Link></span>
    </div>
  )
}

export default AuthButtons