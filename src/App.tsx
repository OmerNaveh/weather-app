import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const data = useSelector((state:State.State)=>state)
  const dispatch = useDispatch()
  const cityInput = useRef<HTMLInputElement>(null)
  const display = ()=>{
    return data.map(city=>{
      return (
        <div key={city.name}>{city.name} {city.temp}</div>
      )
    })
  }
  const searchCity=()=>{
    if(!cityInput.current ||!cityInput.current.value ) return
    const cityName = cityInput.current.value;
    dispatch({type:"Change_Weather", name:cityName})
  }
  return (
    <div className="App">
      <input ref={cityInput}></input>
      <button onClick={()=>{searchCity()}}></button>
    {display()}
    </div>
  );
}

export default App;
