import { config } from '../config';

export const fetchWeather = (searchParam) => {
  return (
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchParam}&units=metric&appid=${config.WEATHER_API_KEY}`
    )
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .catch((err) => console.log(err, 'err'))
  );
};
