import "./styles.css";
import Search from "./Search";

export default function Container() {
  return (
    <div className="Container">
      <div id="bigContainerWeatherApp">
        <h1 id="title">Weather App</h1>
        <h2 id="time">
          <span id="currentTime">21:47, 18 of January</span>
        </h2>
        <Search />
      </div>
    </div>
  );
}
