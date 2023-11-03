import React from 'react'
import "../css/hero.css"
import "../css/button.css"
import { useNavigate } from "react-router-dom";

import { Button } from './ButtonsCustom'
const WellcomeText = () => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    const path = "/reservation"; 
    navigate(path);
  }
  const routeChangeCheckin = () =>{ 
    const path = "/checkin"; 
    navigate(path);
  }
  return (
    <div className='hero-container'>
        <img src={require("../imgs/path_to_large_logo.png")} alt="Mariott Logo" style = {{width: "20%"}} />
        <p>Hotels - Resorts - Suites</p>
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={routeChange}
            
        >
            <p className='shadow'>Reservation</p>   
        </Button>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={routeChangeCheckin}
        >
          <p className='shadow'>Check-in </p>  
        </Button>
        </div>
     </div>

  )
}

export default WellcomeText
