import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const name = data.map(country => country.name);
      console.log(name);
    })
  },[]);

  const handleAddCountry = (country) => { 
    const newCart = [...cart, country];
    setCart(newCart);
   };

  return (
    <>
      <h1 className='head'>Loaded {countries.length} countries from database...</h1>
      <h3 className='info'>Country added: {cart.length}</h3>
      <Cart></Cart>
      {countries.map(country => <Country country = {country} handleAddCountry={handleAddCountry} key = {country.name.official}></Country>)}
      
    </>
  ); 
}

export default App;
