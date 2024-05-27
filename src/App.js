import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Img from './Img/valle-de-aburra-1.jpg';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Medellin');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '9e7e29464ca934303c3571d09caf8f58';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div 
      className="App App-background"
      style={{ backgroundImage: `url(${Img})` }} /* Establecer la imagen de fondo */
    >
      <h1 className="title">El Clima en el Valle de Aburrá</h1>
      <section className="columna1">
        <form>
          <label>Municipios del valle de aburra</label>
          <br /><br />
          <select onChange={handleCityChange} value={city}>
            <option>Medellin</option>
            <option>Envigado</option>
            <option>Sabaneta</option>
            <option>Caldas</option>
            <option>La Estrella</option>
            <option>Girardota</option>
            <option>Copacabana</option>
            <option>Barbosa</option>
            <option>Bello</option>
            <option>Itagui</option>
          </select>
        </form>
      </section>
      <br />
      
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Condición: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;