import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const[countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const name = data.map(country => country.name);
      console.log(name);
    })
  },[]);
  return (
    <>
      <h1 className='head'>Loaded {countries.length} countries from database...</h1>
      <ol>
        {countries.map(country => <Country country = {country} key = {country.name.official}></Country>)}
      </ol>
    </>
  );
}

export default App;
