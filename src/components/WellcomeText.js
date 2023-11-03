import React from 'react'
import "../css/hero.css"
import "../css/button.css"

import { Button } from './ButtonsCustom'
const WellcomeText = () => {
  return (
    <div className='hero-container'>
        <img src={require("../imgs/path_to_large_logo.png")} alt="Mariott Logo" style = {{width: "20%"}} />
        <p>Hotels - Resorts - Suites</p>
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            
        >
            <p className='shadow'>Reservation</p>   
        </Button>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            
        >
          <p className='shadow'>Check-in </p>  
        </Button>
        </div>
     </div>

  )
}

export default WellcomeText
