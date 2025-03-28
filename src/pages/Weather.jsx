import { useState } from "react";
import { WeatherCard } from "../components/ui/WeatherCard";
import { SearchBar } from "../components/ui/SearchBar";
// import { WeatherLogo } from "../components/ui/WeatherLogo";
import "../components/ui/WeatherLayout.css"

export const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    console.log("Weather component mounted!");

    return (
        <>
        <div className="BBIGGcontainer">
            <SearchBar setWeatherData={setWeatherData} />
            <div className="cardcont">
            {weatherData && <WeatherCard currCity={weatherData} />}</div>
        </div>
        </>
    );
};