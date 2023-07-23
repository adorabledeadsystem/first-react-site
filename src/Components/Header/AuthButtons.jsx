import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  let signIn = true;
  let signUp = false;
  return (
    <div className={styles.auth}>
        <span><Link to="/AuthPage" state={{temp : signUp}}>Зарегистрироваться</Link> / <Link to="/AuthPage" state={{temp : signIn}}>Войти</Link></span>
    </div>
  )
}

export default AuthButtons