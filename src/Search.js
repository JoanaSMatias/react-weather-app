import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="yourCityWeatherInput">
        <input
          id="cityName"
          className="city"
          type="text"
          placeholder="Search your city!"
          autoComplete="off"
        />
        <input id="submit" type="submit" value="search" tabIndex="-1" />
      </form>
    </div>
  );
}
