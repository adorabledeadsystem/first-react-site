import React from 'react'
import logoImage from '../../assets/img/map.svg'

const BackgroundStyle = {
    backgroundImage: `url(${logoImage})`,
    width: "720px",
    height: "420px",
    margin: '0 auto',
  }

const Map = () => {
  return (
    <div>
        <h1>Карта локаций</h1>
        <div style={BackgroundStyle}></div>
    </div>
  )
}

export default Map