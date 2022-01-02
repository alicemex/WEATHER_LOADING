import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';



const Weather = () => {

    const [weatherData, setWeatherData] = useState({});
    const [units, setUnits] = useState(true);
    
    const changeUnits = ()=>{
        setUnits(!units);
    }
    useEffect(()=>{
        const success = (position)=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=77c4ea3d709713842aea77dd0ba5ccdf`)
            .then(res=>setWeatherData(res.data));
        }
        
        const error=() =>{
            console.log("no pudo leer cordenadas :'V ");
        }
        
        navigator.geolocation.getCurrentPosition(success, error);
        
    },[]);

     console.log(weatherData?.sys.country);
let kelvin = weatherData.main?.temp;
let centigrados = (kelvin- 273.15);
centigrados = centigrados.toFixed(2);
    return (
        <div  className="Weather">
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`} alt="icon" />
            {/* <p>Country: {weatherData?.sys.country}</p>  */}
            <p>City:  {weatherData.name} </p>
            <p>Sky:  {weatherData.weather?.[0].main} </p>
            <p>Descrpition:  {weatherData.weather?.[0].description} </p>
            <p>Feels like: {units?`${centigrados}°C`:`${(centigrados*1.8)+32}°F`} </p>
            <button onClick={changeUnits}>Change units</button>
        </div>
    );
};

export default Weather;