import React, { useEffect } from "react";
import "./FutureScope.css";

export const FutureScope = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".scope-card");
      cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="future-container">
      <h2 className="future-heading">🚀 Future of OurFarmer</h2>
      <div className="scope-cards">
        <div className="scope-card">🌱 AI Crop Insights</div>
        <div className="scope-card">🌍 Global Expansion</div>
        <div className="scope-card">🔗 Blockchain Trade</div>
        <div className="scope-card">📡 Smart Sensors</div>
        <div className="scope-card">🌐 Multilingual Support</div>
        <div className="scope-card">💻 Community Forum</div>
        <div className="scope-card">📱 Mobile Application</div>
      </div>
    </div>
  );
};