import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
function WeatherApp() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const changeCityInput = (e) => {
    setCityName(e.target.value);
  };
  const fetchWeatherAPI = async () => {
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=ec16e5013160680b8ab812b5e335afed`;
    //const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ec16e5013160680b8ab812b5e335afed`;
    const resp = await fetch(APIurl);
    const respJson = await resp.json();
    setWeatherData(respJson);
  };
  let handleMouseOut = (e) => {
    fetchWeatherAPI();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="text-center text-success"> React Weather App</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City Name"
                onChange={changeCityInput}
                onMouseOut={handleMouseOut}
                value={cityName}
              />
            </div>
            {/* Weather app info*/}
            <WeatherInfo cityName={cityName} weatherData={weatherData} />
            {/* Weather app info*/}
          </div>
        </div>
      </div>
    </>
  );
}
export default WeatherApp;
