import './App.css';
import Title from "./Title/Title";
import WeatherList from "./WeatherList/WeatherList";
import StyledButton from "./StyledButton";
import React, {Component} from "react";
import { GlobalStyles } from "./Global";

class App extends Component {
  state = {
    primary: true,
  }

  changeTheme = () => {
    this.setState(({ primary }) => ({ primary: !primary }))
  }

  render(){
    return(
    <div className="App">
      <GlobalStyles primary={this.state.primary} />
      <StyledButton primary={this.state.primary} onClick={this.changeTheme}>Change Theme Colour</StyledButton>
      <Title />
      <WeatherList />
    </div>
    )}

  }

export default App;
