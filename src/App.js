import './App.css';
import Title from "./Title/Title";
import SearchEngine from "./SearchEngine/SearchEngine";
import WeatherList from "./WeatherList/WeatherList";

function App() {
  return (
    <div className="App">
      <Title />
      <SearchEngine />
      <WeatherList />
    </div>
  );
}

export default App;
