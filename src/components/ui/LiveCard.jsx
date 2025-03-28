import React from 'react';
import './LiveCard.css';

export const LiveCard = ({ currentCommodity }) => {
    if (!currentCommodity) {
        console.warn("LiveCard received undefined data");
        return null;
    }

    const { 
        State, District, Market, Commodity, Grade, Arrival_Date, Min_Price, Max_Price, Modal_Price 
    } = currentCommodity;

    return (
        <div className="Box-container">
            <div className="header">{State}, {District}</div>
            <div className="market">{Market}</div>
            <div className="data-container">
                <div className="data-title">Commodity</div>
                <div className="data-value">{Commodity}</div>

                <div className="data-title">Grade</div>
                <div className="data-value">{Grade}</div>

                <div className="data-title">Arrival Date</div>
                <div className="data-value">{Arrival_Date}</div>

                <div className="data-title">Min Price</div>
                <div className="data-value">₹{Min_Price}</div>

                <div className="data-title">Max Price</div>
                <div className="data-value">₹{Max_Price}</div>

                <div className="data-title">Modal Price</div>
                <div className="data-value">₹{Modal_Price}</div>
            </div>
        </div>
    );
};