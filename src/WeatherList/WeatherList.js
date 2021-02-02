import React, { Component } from 'react';
import './WeatherList.css';

import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchWeather } from '../APIFile/APIFile';
import SearchEngine from '../SearchEngine/SearchEngine';

class WeatherList extends Component {
  state = {
    searchParam: 'Liverpool',
    name: '',
    weather: '',
    info: '',
    wind: '',
    weatherAttr: {
      feelsLike: 0,
      humidity: 0,
      temp: 0,
      minTemp: 0,
      maxTemp: 0,
    },
    error: false,
  };

  componentDidMount() {
    // console.log('mounting');
    fetchWeather(this.state.searchParam)
      .then((result) => {
        this.setState({
          name: result.name,
          weather: result.weather[0].main,
          info: result.weather[0].description,
          wind: result.wind.speed,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updatePlace = (newSearchParam) => {
    this.setState({ searchParam: newSearchParam });
    fetchWeather(newSearchParam)
      .then((result) => {
        this.setState({
          name: result.name,
          weather: result.weather[0].main,
          info: result.weather[0].description,
          wind: result.wind.speed,
        });
        this.setState({ error: false });
      })
      .catch((err) => {
        this.setState({ error: true });
        console.log(err);
      });
  };

  render() {
    // console.log('rendering');
    return (
      <main className="weather-list-container">
        <SearchEngine updatePlace={this.updatePlace} />
        {this.state.error ? (
          <h3>Sorry No Results Found </h3>
        ) : (
          <WeatherCard
            name={this.state.name}
            weather={this.state.weather}
            desc={this.state.description}
            wind={this.state.wind}
          />
        )}
      </main>
    );
  }
}

export default WeatherList;
