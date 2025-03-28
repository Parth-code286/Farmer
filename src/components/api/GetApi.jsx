export const GetApi = async (city) => {
    if (typeof city !== "string" || !city.trim()) {
        console.error("Invalid city name. Expected a valid string but got:", city);
        return null;  // Stop execution if city is not a valid string
    }

    city = city.trim();  // Remove extra spaces

    console.log("Fetching weather data for:", city);
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data.location) {
            console.warn("Invalid response: City not found.");
            return null;
        }

        console.log("Fetched Weather Data:", data);
        return data;
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
};