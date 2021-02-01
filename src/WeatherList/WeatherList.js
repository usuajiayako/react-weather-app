import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherList.css";

class WeatherList extends Component {
  render(){
    return(
      <main className="weather-list-container">
        <p>this is the weather list</p>
        <WeatherCard />
        <WeatherCard />
      </main>
    )
  }
}

export default WeatherList;