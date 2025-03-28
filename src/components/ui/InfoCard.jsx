import "./InfoCard.css";

export const InfoCard = ({ localtime, wind_kph, humidity, uv }) => {
    return (
        <div className="info-card">
            <div className="info-row">
                <span className="info-title">Date-Time</span>
                <span className="info-value">{localtime}</span>
            </div>
            <div className="info-row">
                <span className="info-title">Wind Speed</span>
                <span className="info-value">{wind_kph} km/h</span>
            </div>
            <div className="info-row">
                <span className="info-title">Humidity</span>
                <span className="info-value">{humidity}%</span>
            </div>
            <div className="info-row">
                <span className="info-title">UV Index</span>
                <span className="info-value">{uv}</span>
            </div>
        </div>
    );
};