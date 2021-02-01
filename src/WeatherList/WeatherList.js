import React, { Component } from 'react';
import './WeatherList.css';

import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchWeather } from '../APIFile/APIFile';

class WeatherList extends Component {
  state = {
    searchParam: 'Manchester',
  };
  componentDidMount() {
    console.log('mounting');
    fetchWeather(this.state.searchParam).then((result) => {
      console.log(result);
    });
  }
  render() {
    console.log('rendering');
    return (
      <main className="weather-list-container">
        <p>this is the weather list</p>
        <WeatherCard />
        <WeatherCard />
      </main>
    );
  }
}

export default WeatherList;
