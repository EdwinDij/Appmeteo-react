import axios from 'axios'
import React from 'react'

export default function Home() {

  const APIKEY = process.env.REACT_APP_API_KEY

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      //console.log(position)

      let long = position.coords.longitude;
      let lat = position.coords.latitude

      const getWeather = (long, lat) => {
        axios.get (`https://api.openweathermap.org/data/3.0/onecall?${lat}&${long}.04&exclude=minutely,alerts&appid=${APIKEY}`)
        .then ((response) => {
          const data = response
          
        })
      }
    })
  } else {
    alert('Vous devez accepter la géolocalisation pour utiliser l\'app!')
  }
  return (
    <div className='home'>
      <h1 className='city'>
        Météo de votre {/*Ville call par api*/}
      </h1>
      <div className='weather'>
        <div className='weather-icon'>
          {/*<img src={/*Icon call par api} alt='weather-icon'/>*/}
          <span className='temperature'>{/* température de l'api */}</span>
        </div>
      </div>
    </div>
  )
}
