import React from 'react'
import { travelSize, budgetSize } from './../../constants/options.jsx'

const Trip = () => {
  return (
    <div class='trip'>
      <div class='trip__header'>
        <h2> Create your dream trip today </h2>
        <p> 
          Create detailed itineraries and explore all 
          the luxuries your location has to offer    
        </p>
      </div>

      <div class='trip__input'>
        <input placeholder='Enter a place'/> 
        <input type='number' placeholder='How many days will you be staying?'/> 
      </div>

      <div class='trip__options'>
        <div class='trip__options--cost'>
          {budgetSize.map((item, index) => (
            <div key={index}>
              <h2>{item.icon}</h2>
              <h2>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          ))} 
        </div>

        <div class='trip__options--size'>
          {travelSize.map((item, index) => (
            <div key={index}>
              <h2>{item.icon}</h2>
              <h2>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Trip
