import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[]);
  return (
    <>
      <h1>Country loaded: {countries.name}</h1>
    </>
  );
}

export default App;
