import React from 'react'

import { DegreesToDirection} from '../helpers/utils'


export const WeatherData = ({ data }) => {
  const { name, country, temp, description, temp_min, temp_max, icon, feels_like} = data;

  return (
    <>
      
      <main>
        <div className='weather-main'>
          <img 
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon'
          className='weather-icon'/>
          <div>
            <h2>{name}, {country}</h2>
            <h3 className='description'>{description}</h3>
          </div>
        </div>
        <div className='temp-main'>
          <h5>Feels like {feels_like} °</h5>
          <h1 className='temperature'>{temp}°</h1>
          <div className='hi-lo'>
            <h5>H {temp_max}°</h5>
            <h5>L {temp_min}°</h5>
          </div>
        </div>
      </main>
      <footer>
        
        <div className='weather-prop'>
          <img src={require('../images/drop.png')} alt=''/>
          
        </div>
      </footer>
    </>
  );
}
