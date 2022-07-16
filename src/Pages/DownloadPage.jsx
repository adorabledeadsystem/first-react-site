import React from 'react'
import { Link } from 'react-router-dom'



const DownloadPage = () => {
  const styles = {
    display: 'flex', 
    color: 'white',
    justifyContent: 'center',
    padding: '30px',
    fontSize: '32px'
  }
  return (
    <div>
        <div style={styles}>
            <Link to='/' >&lt;</Link> &nbsp;
            <h3>Страница для скачивания!</h3>
        </div>
    </div>
  )
}

export default DownloadPage