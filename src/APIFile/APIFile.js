import { config } from '../config';

export const fetchWeather = (searchParam) => {
  return (
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchParam}&units=metric&appid=${config.WEATHER_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => data)
      .catch((err) => console.log(err, 'err'))
  );
};
