import React from 'react'
import './Hero.css'
import image from '/travel.png'

const Hero = () => {
  return (
    <div class='hero'>
      <div class='hero__container'>
        <div class='hero__container__img'>
          <img alt='traveling image' src={image}/>
        </div>

        <div class='hero__container__desc'>
          <h3> Find your travel plans today </h3>
          <p> 
          PlanIt helps you organize all your travel plans 
          in one place, giving you a clear view of your trips—even 
          if you're planning one while still on another. And the 
          benefits of the free version don’t end there! 
          </p>
          <button href='/create-trip' class='button-92' role='button'> Sign Up--It's Free! </button>
        </div>
      </div>  
    </div>
  )
}

export default Hero
