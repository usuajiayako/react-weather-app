import React, { Component } from 'react';
import './WeatherList.css';

import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchWeather } from '../APIFile/APIFile';
import SearchEngine from '../SearchEngine/SearchEngine';

class WeatherList extends Component {
  state = {
    searchParam: "Liverpool",
    name: "",
    weather: "",
  };

  updatePlace = (newSearchParam) => {
    this.setState({searchParam: newSearchParam})
    
  } 

  componentDidMount() {
    console.log('mounting');
    fetchWeather(this.state.searchParam).then((result) => {
      this.setState({name: result.name, weather: result.weather[0].main });
    });
  }
  render() {
    console.log('rendering');
    return (
      <main className="weather-list-container">
        <SearchEngine updatePlace={this.updatePlace}/>
        <WeatherCard name={this.state.name} weather={this.state.weather}/>
      </main>
    );
  }
}

export default WeatherList;
