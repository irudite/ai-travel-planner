import React from 'react'
import { travelSize, budgetSize } from './../../constants/options.jsx'
import './Trip.css'

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
        <h2> Please list your destination </h2>
        <input placeholder='Enter a place'/> 
        <h2> How many days will you be staying? </h2>
        <input type='number' placeholder='i.g 2 days'/> 
      </div>

      <div class='trip__options'>
        <h2> What is your budget? </h2>
        <div class='trip__options--cost'>
          {budgetSize.map((item, index) => (
            <div class='trip__options--cost--choices' key={index}>
              <h2>{item.icon}</h2>
              <h2>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          ))} 
        </div>

        <h2> How many people are you traveling with? </h2>
        <div class='trip__options--size'>
          {travelSize.map((item, index) => (
            <div class='trip__options--size--choices' key={index}>
              <h2>{item.icon} ({item.people} People)</h2>
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
