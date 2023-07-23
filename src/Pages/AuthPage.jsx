import React from 'react'
import Authorization from '../Components/Authorization/Authorization';
import { useLocation } from "react-router-dom";



const AuthPage = () => {
    const location = useLocation();
    let authFlag = location.state?.temp;
  return (
    <div>
      <Authorization name={authFlag} />
    </div>
  )
}

export default AuthPage