import { ExploreUs } from "../components/ui/ExploreUs";
import { FutureScope } from "../components/ui/FutureScope";
import { TitleSection } from "../components/ui/TitleSection"; // Adjust path as needed
import "../styles/About.css"; // Import the CSS file

export const About = () => {
  return (
    <div className="aboutus-page">
      <TitleSection />
      <ExploreUs />
      <FutureScope />
    </div>
  );
};