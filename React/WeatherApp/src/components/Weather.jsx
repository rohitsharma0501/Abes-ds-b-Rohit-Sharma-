import React from 'react'
import './weather.css'
function Weather(props) {
  return (
    <div>
      <div id="box">
        <h4>City : {props.city}</h4>
        <h4>Temperature : {props.temperature}</h4>
      </div>
    </div>
  )
}

export default Weather
