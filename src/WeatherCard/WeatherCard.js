import './WeatherCard.css';

const WeatherCard = (props) => {
  return (
    <div className="weather-card-container">
      <h3 className="name">{props.name}</h3>
      <p>
        <span>Weather:</span> {props.weather}
      </p>
      <p>
        <span>Wind Speed:</span> {props.wind}mph
      </p>
      <p>
        <span>Feels Like:</span> {props.feelsLike}°C
      </p>
      <p>
        <span>Humidity:</span> {props.humidity}%
      </p>
      <p>
        <span>Temp:</span> {props.temp}°C
      </p>
    </div>
  );
};

export default WeatherCard;
