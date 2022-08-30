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
      <h1>Data loaded of {countries.length} countries</h1>
      <ol>
        {countries.map(country => <li>{country.name.common}</li>)}
      </ol>
    </>
  );
}

export default App;
