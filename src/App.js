import "./App.css";
// Components import
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import BenefitSection from "./components/BenefitSection";
import BenefitSectionMobile from "./components/BenefitSectionMobile";
import BenefitSectionTab from "./components/BenefitSectionTab";
// Images import
import "./assets/images/background-color.png";
import "./assets/images/bg-rectangle.png";

function App() {
  return (
    <div className="background">
      <div className="navBar">
        <NavigationBar />
      </div>
      <div className="landingPage">
        <LandingPage />
      </div>
      <div className="BenefitSection">
        <BenefitSection />
        <BenefitSectionMobile />
        <BenefitSectionTab />
      </div>
    </div>
  );
}

export default App;
