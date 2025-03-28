import { useState } from "react";
import { GetApi } from "../api/GetApi";

export const SearchBar = ({ setWeatherData }) => {
    const [searchCity, setSearchCity] = useState("");

    const handleSearch = async () => {
        const trimmedCity = searchCity.trim();
        if (!trimmedCity) {
            alert("Please enter a valid city name");
            return;
        }

        console.log("User searched for:", trimmedCity);
        
        try {
            const data = await GetApi(trimmedCity);
            if (data) {
                setWeatherData({ ...data.location, ...data.current });
            } else {
                alert("City not found. Please try again!");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};