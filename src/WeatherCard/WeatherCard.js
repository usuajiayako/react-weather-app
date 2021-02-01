import "./WeatherCard.css"

const WeatherCard = (props) => {
  return(
    <div className="weather-card-container">
      <h3>{props.name}</h3>
      <p>{props.weather}</p>
      <p>weather info</p>
    </div>
  )
}

export default WeatherCard;