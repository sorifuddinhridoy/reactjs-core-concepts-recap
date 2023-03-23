 import logo from './logo.svg';
import './App.css';

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
  backgroundColor: 'yellow',
  margin: '20px',
  borderRadius: '20px',
  padding: '15px'

}
function District(props){

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.special}</p>
    </div>
  )
}

export default App;
