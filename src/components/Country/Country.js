import React from 'react';
import "../Country/Country.css"

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    console.log(props.country);
    return (
        <div className='info'>
            <img className='img' src={flags.svg} alt="" />
            <h1>{name.common}</h1>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3><br />
        </div>
    );
};

export default Country;