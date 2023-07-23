import React from 'react'
import {cards} from './cards.js'
import styles from './Subscriptions.module.scss'
import classNames from 'classnames'


const Subscriptions = () => { 
 /* const setActive = (idx) => {
    console.log(idx);
    cards.map((item, index) => (
      index === idx ? item.active = "active" : item.active = "" 
    ));
  }
  */
  return (
    <div className={styles.subscriptions}> 
        <h1 className='Prices'>Доступные подписки</h1>
        <div className={styles.cardsFlex}>
            {cards.map((item, index) => (
            <div className={classNames( (item.active === 'active' ? styles.active : ''), styles.card)} key = {index}>
                <h3>{item.title}</h3>
                <h6>{item.price}</h6>
                <div className={styles.descripItem}>{item.description.map((descripItem, idx) => (<p key={idx}>{descripItem}</p>)) }</div>
                <button >Выбрать</button>
            </div>
          )) }
        </div>
    </div>
  )
}

export default Subscriptions