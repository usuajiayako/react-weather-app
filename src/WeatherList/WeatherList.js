import React, { Component } from 'react';
import './WeatherList.css';

import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchWeather } from '../APIFile/APIFile';

class WeatherList extends Component {
  state = {
    searchParam: "Liverpool",
    name: "",
    weather: "",
  };
  componentDidMount() {
    console.log('mounting');
    fetchWeather(this.state.searchParam).then((result) => {
      console.log(result.weather[0].main)
      this.setState({name: result.name, weather: result.weather[0].main });
    });
  }
  render() {
    console.log('rendering');
    return (
      <main className="weather-list-container">
        <p>this is the weather list</p>
        <WeatherCard name={this.state.name} weather={this.state.weather}/>
        <WeatherCard />
      </main>
    );
  }
}

export default WeatherList;
