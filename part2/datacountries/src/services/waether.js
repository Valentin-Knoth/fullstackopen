import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;
const getWeather = (LAT,LON) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${api_key}`;
  return axios.get(url).then((res) => res.data);
};

export default { getWeather };
