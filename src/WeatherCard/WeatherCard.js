import './WeatherCard.css';

const WeatherCard = (props) => {
  return (
    <div className="weather-card-container">
      <h3>{props.name}</h3>
      <p>{props.weather}</p>
      <p>{props.desc}</p>
      <p>Wind Speed {props.wind}mph</p>
      <p>Feels Like: {props.feelsLike}</p>
      <p>Humidity: {props.humidity}</p>
      <p>Temp: {props.temp}</p>
    </div>
  );
};

export default WeatherCard;
