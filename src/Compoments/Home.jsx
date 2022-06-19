import React from 'react'

export default function Home() {

const getWeather = () =>  {

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
