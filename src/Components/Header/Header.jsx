import React from 'react'
import logoImage from '../../assets/img/logo.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import {menu} from './menu.js'
import AuthButtons from './AuthButtons'
import { animateScroll as scroll } from "react-scroll";

const backgroundStyle = {
  backgroundImage: `url(${logoImage})`,
  width: '33px' ,
  height: '28px'
}

const Header = () => {
  return (
    <div className={styles.header}>  
      <div className={styles.logo} onClick={() => scroll.scrollToTop()}>
        <div style={backgroundStyle}></div>
        <h3>WARPLAY.CLOUD</h3>
      </div>
      <div className={styles.menu}>
        <ul>
          {menu.map((item, index) => (
            <li key = {index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          )) }
        </ul>
      </div>
      <AuthButtons />
    </div>
  )
}

export default Header