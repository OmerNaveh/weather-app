import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const data = useSelector((state:State.State)=>state)
  const dispatch = useDispatch()
  const cityInput = useRef<HTMLInputElement>(null)
  const display = ()=>{
    return data.map(city=>{
      return (
        <div className='resultsWeather' key={city.name}>{city.name} {city.temp}°C
        <p>{city.icon}</p>
        </div>
      )
    })
  }
  const searchCity=()=>{
    if(!cityInput.current ||!cityInput.current.value ) return
    const cityName = cityInput.current.value;
    dispatch({type:"Change_Weather", name:cityName})
    cityInput.current.value = ''
  }
  return (
    <div className="App">
      <h1 className='pageTitle'>Weather App</h1>
      <div>
        <input autoFocus className='cityInput' ref={cityInput}></input>
        <button onClick={()=>{searchCity()}}>Search</button>
      </div>
      {display()}
    </div>
  );
}

export default App;
