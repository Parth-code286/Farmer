import { useEffect, useState } from "react";
import "./ExploreUs.css";

export const ExploreUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".features-container");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="explore-wrapper">
      <div className="explore-container">
        <div className="explore-heading">Explore Us</div>
        <div className="explore-line"></div>
        <div className={`features-container ${visible ? "visible" : ""}`}>
          <div className="feature-box">Weather</div>
          <div className="feature-box">Live Prices</div>
          <div className="feature-box">Chatbot</div>
          <div className="feature-box">E-Commerce</div>
        </div>
      </div>
    </div>
  );
};