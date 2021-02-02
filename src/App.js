import './App.css';
import Title from "./Title/Title";
import WeatherList from "./WeatherList/WeatherList";
import StyledButton from "./Theme";
import React, {Component} from "react";

class App extends Component {
  state = {
    theme: true,
  }
  render(){
    return(
    <div className="App">
      <StyledButton theme={this.state.theme} onClick={this.changeTheme}>Change Theme Colour</StyledButton>
      <Title />
      <WeatherList />
    </div>
    )}

  changeTheme(event) {
    this.setState((currentState) => {currentState.state.theme = false})
  }
  }

export default App;
