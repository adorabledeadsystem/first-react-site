import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Authorization.module.scss'
import { useForm } from "react-hook-form";

const auth = [
    {id: 1, title: 'Регистрация', postTitle: 'Вход', checkbox: 'Я соглашаюсь с Политикой конфиденциальности',  flexDirection: 'row', buttonName: 'Зарегистрироваться',},
    {id: 2,title: 'Вход',postTitle: 'Регистрация',checkbox: 'Запомнить', flexDirection: 'column',buttonName: 'Войти',},
]


const Authorization = ({name}) => {
//Выбор страницы Вход или Регистрация
let i = 0;
const loginButtonFLex = {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    alignItems: 'center',
    marginTop: '20px',
    flexDirection : auth[i].flexDirection,
}
const setText =() =>{
    name ? i = 1 : i = 0 
}
//Регистрация
const { register, handleSubmit,reset, formState: { errors } } = useForm();
function onSubmit (data){
    console.log(data)
    reset();
}
  return (
      <div className={styles.authWrapper}>
        {setText()}
        <div className={styles.authFlex}>
            <div className={styles.loginNames}>
                <Link to='/' className={styles.arrow}>&lt;</Link>
                <div className={styles.loginTextUpper}>{auth[i].title}</div>
                <div className={styles.loginTextLow}>{auth[i].postTitle}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formFlex}> 
                <input type="text" {...register('username',{required: "Введите Почту или Телефон", minLength: {value: 10, message: "Логин должен содержать минимум 10 символов"},  maxLength: {value: 14, message: "Логин должен содержать максимум 14 символов"} })}  placeholder='Почта / Телефон' />
                <input type="password" {...register('password',{required: "Введите Пароль", minLength: {value: 8, message: "Пароль должен содержать минимум 8 символов"},  maxLength: {value: 18, message: "Пароль должен содержать максимум 18 символов"}})}  placeholder='Пароль' />
            <div className={loginButtonFLex}>
                <label color='white'>
                    <input type="checkbox" value=""/>&nbsp;{auth[i].checkbox}
                </label>
                <button type='submit' className={styles.loginButton}>{auth[i].buttonName}</button>
            </div> 
            </form> 
            <div style={{height:40, color: 'red'}}>{errors?.username && <p>{errors?.username?.message}</p>}</div>
            <div style={{height:40, color: 'red'}}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
        </div>
    </div>
  )
}

export default Authorization

