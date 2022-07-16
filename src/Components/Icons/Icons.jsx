import React from 'react'
import styles from './Icons.module.scss'
import {icons} from './iconsArray.js'


const Icons = () => {
  return (
    <div>
        <h1>Начни играть</h1>
        <div className={styles.iconsWrapper}>
          {icons.map((item, index) => (
            <div className={styles.iconsFlex} key = {index}>
              <div  className={styles.icon}>
                <img src={item.link} alt =""/>
                <div className={styles.iconText}>{item.title}</div>
              </div>
              <img src={item.line} alt="" />
            </div>
          )) }
        </div>
    </div>
  )
}

export default Icons