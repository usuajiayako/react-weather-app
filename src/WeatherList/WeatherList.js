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
    wind: "",
    feelsLike: 0,
    humidity: 0,
    temp: 0,
    error: false,
  };

  componentDidMount() {
    // console.log('mounting');
    fetchWeather(this.state.searchParam)
      .then((result) => {
        console.log(result)
        this.setState({
          name: result.name,
          weather: result.weather[0].main,
          wind: Math.round(result.wind.speed),
          feelsLike: Math.round(result.main.feels_like),
          humidity: result.main.humidity,
          temp: Math.round(result.main.temp),
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
          wind: Math.round(result.wind.speed),
          feelsLike: Math.round(result.main.feels_like),
          humidity: result.main.humidity,
          temp: Math.round(result.main.temp),
        });
        this.setState({ error: false });
        console.log(this.state)
      })
      .catch((err) => {
        this.setState({  error: true });
        console.log(err);
      });
  };

  render() {
    // console.log('rendering');
    console.log(this.state)
    return (
      <main className="weather-list-container">
        <SearchEngine updatePlace={this.updatePlace} />
        {this.state.error ? (
          <h3>Sorry No Results Found </h3>
        ) : (
          <WeatherCard
            name={this.state.name}
            weather={this.state.weather}
            icon={this.state.icon}
            desc={this.state.description}
            wind={this.state.wind}
            feelsLike={this.state.feelsLike}
            humidity={this.state.humidity}
            temp={this.state.temp}
          />
        )}
      </main>
    );
  }
}

export default WeatherList;
