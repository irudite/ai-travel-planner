import React, { useState } from 'react'
import { travelSize, budgetSize } from './../../constants/options.jsx'
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import './Trip.css'

const Trip = () => {
  //update DOM, and user preferences for trip
  const [location, setLocation] = useState("");
  const [tripData, setTripData] = useState([]);

  const handleInputChange = (data, value) => {
    setTripData({
      ...tripData,
      [data]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/trips/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Trip created', data);
      }
      else {
        throw new Error('HTTP error!');
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  //import API keys
  const googlePlacesAPI = import.meta.env.VITE_GOOGLE_PLACES_API;

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
        <GooglePlacesAutocomplete apiKey={googlePlacesAPI}
          selectProps={{
            location,
            onChange: (place) => {
              setLocation(place);
              handleInputChange('location', place);
            }
          }}
        />
        <h2> How many days will you be staying? </h2>
        <input value={tripData.days} type='number' placeholder='i.g 2 days'
          onChange={(e) => handleInputChange('days', e.target.value)} />
      </div>

      <div class='trip__options'>
        <h2> What is your budget? </h2>
        <div class='trip__options--cost'>
          {budgetSize.map((item, index) => (
            <div className={`trip__options--cost--choices 
            ${tripData?.budget == item.title ? "selected" : ""} 
            }`} key={index} onClick={() => handleInputChange('budget', item.title)}>
              <h2> {item.icon} </h2>
              <h2> {item.title} </h2>
              <h2> {item.desc} </h2>
            </div>
          ))}
        </div>

        <h2> How many people are you traveling with? </h2>
        <div class='trip__options--size'>
          {travelSize.map((item, index) => (
            <div className={`trip__options--size--choices
              ${tripData?.size == item.people ? "selected" : ""}
              `} key={index} onClick={() => handleInputChange('size', item.people)}>
              <h2> {item.icon} | {item.people} person(s) </h2>
              <h2> {item.title}</h2>
              <h2> {item.desc}</h2>
            </div>
          ))}
        </div>
        {console.log(tripData)}
      </div>

      <div class='trip__button'>
        <button onClick={handleSubmit}> Generate Trip! </button>
      </div>
    </div>
  )
}

export default Trip
