import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const name = data.map(country => country.name.common);
      console.log(name);
    })
  },[]);
  return (
    <>
      <h1>Loaded {countries.length} countries from database.</h1>
      <ol>
        {countries.map(country => <li>{country.name.common} <img src={country.flags.png} alt="" /> </li>)}
      </ol>
    </>
  );
}

export default App;
