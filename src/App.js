 import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name='Noakhali' special='vibag'></District>
      <District name='Bramonbaria' special='joda akbor'></District>
      <District name='cumilla' special='Moy na moti'></District>
    </div>
  );
}
const districtStyle ={
  backgroundColor: 'red',
  margin: '20px',
  borderRadius: '20px',
  padding: '15px'

}
function District(props){
  const [power, setPower] =useState(1);

  const boostPower =() => setPower(power * 2);

  // const boostPower = () =>{
  //   const newPower = power * 2;
  //   setPower(newPower);

  // }

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The power</button>
      
    </div>
  )
}

export default App;
