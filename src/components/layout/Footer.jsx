import React from "react";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <p className="footer-text">Created by Boring Bunch</p>
        <form className="feedback-form">
          <label htmlFor="feedback">Give us your feedback:</label>
          <textarea id="feedback" rows="3" placeholder="Your feedback here..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </footer>
    </div>
  );
};
