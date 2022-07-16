import React from 'react'
//import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Authorization.module.scss'


const Authorization = () => {
  return (

    <div className={styles.authWrapper}>
        <div className={styles.authFlex}>
            <div className={styles.loginNames}>
                <Link to='/' className={styles.arrow}>&lt;</Link>
                <div className={styles.loginTextUpper}>Вход</div>
                <div className={styles.loginTextLow}>Регистрация</div>
            </div>
            <form action="" className={styles.formFlex}>
                <input type="text" placeholder='Почта / Телефон' />
                <input type="text" placeholder='Пароль' />
            </form>
            <div className={styles.loginButtonFLex}>
                <label>
                    <input type="checkbox" value=""/>Запомнить
                </label>
                <button className={styles.loginButton}>Войти</button>
            </div>    
            
        </div>
    </div>
  )
}

export default Authorization

