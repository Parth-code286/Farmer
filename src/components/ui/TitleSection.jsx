import "./AboutSection.css";
import Tilt from "react-parallax-tilt";

export const TitleSection = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-heading">
          {"About Us".split().map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
              {char}
            </span>
          ))}
        </div>
        <div className="about-text">
        At OurFarmer, we bridge technology and agriculture to empower farmers with real-time insights and market access. Our goal is to enhance decision-making and drive sustainable growth. With innovation at our core, we strive to make farming more efficient and profitable.
        </div>
      </div>
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
        <div className="about-logo">
          <img src="/uuull.jpeg" alt="Our Logo" className="logo-image" />
        </div>
      </Tilt>
    </div>
  );
};