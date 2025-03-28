import { useState } from "react";
import "./WeatherCard.css";
import { InfoCard } from "./InfoCard";
import { useParams } from "react-router-dom";

export const WeatherCard = ({ currCity }) => {

    const [showInfo, setShowInfo] = useState(false);
    const paramS = useParams();
    console.log(paramS);
    
    if (!currCity) return <p>No weather data available.</p>;

    const { name, region, temp_c, condition } = currCity;

    
    const getWeatherClass = () => {
        if (temp_c <= 0) return "FREEZING";
        if (temp_c >= 1 && temp_c <= 10) return "MOSTCOLD";
        if (temp_c > 10 && temp_c <= 20) return "COOL";
        if (temp_c > 20 && temp_c <= 30) return "SUNNY";
        if (temp_c > 30 && temp_c <= 40) return "MOSTHOT";
        if (condition?.text.includes("Rain")) return "RAINY"; 
        return "";
    };

    return (
        <div className={`weather-card ${getWeatherClass()}`}>

            <div className={`upper-section ${getWeatherClass()}`}>
                <div className="infobox">
                    <h2>{name}, {region}</h2>
                    <p className="temperature">Temperature: <span>{temp_c}°C</span></p>
                </div>
            </div>

            <button className="more-details-btn" onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? "Hide Details" : "More Details"}
            </button>

            <div className={`lower-section ${showInfo ? "active" : ""}`}>
                <InfoCard {...currCity} />
            </div>
        </div>
    );
};