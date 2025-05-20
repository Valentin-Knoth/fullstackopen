import { useEffect, useState } from "react";
import serviceWeather from "../services/waether";

const Countries = ({ countries, filtrado }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countries.length === 1) {
      const country = countries[0];
      const lat = country.latlng[0];
      const lon = country.latlng[1];

      setWeather(null);
      setError(null);
      setLoading(true);

      serviceWeather
        .getWeather(lat, lon)
        .then((response) => {
          setWeather(response);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [countries]);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

        {loading && <p>Loading weather...</p>}
        {error && <p>Error fetching weather data: {error.message}</p>}

        {weather && (
          <div>
            <h3>Weather in {country.capital[0]}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => filtrado(country.name.common)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
