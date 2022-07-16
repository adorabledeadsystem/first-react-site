import React from 'react'
import styles from './Footer.module.scss'
import logoImage from '../../assets/img/logoFooter.svg'
import {logos} from './logos.js'

const footerBackgroundStyle = {
    backgroundImage: `url(${logoImage})`,
    width: '48px' ,
    height: '38px'
  }

const Footer = () => {
  return (
    <div className={styles.footer}>
            <div className={styles.footerFlexLeft}>
                <div style={footerBackgroundStyle}></div>
                <h3>WARPLAY.CLOUD</h3>
                <div className={styles.rights}>2022. All rights reserved.</div>
            </div>
            <div className={styles.footerFlexRight}>
                <p>Политика конфиденциальности</p>
                {logos.map((item, index) => (<div className={styles.footerLogos} key = {index}><img src={item.link} alt =""/></div>))}
            </div>
    </div>
  )
}

export default Footer