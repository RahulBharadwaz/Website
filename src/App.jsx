import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ChooseUsSection from "./components/ChooseUsSection/ChooseUsSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Footer from "./components/Footer/Footer";
import NewsComponent from "./components/NewsSection/NewsComponent";
import Feedback from "./components/FeedbackSection/Feedback";
import "./index.css";

function App() {
  const [displayNews, setDisplayNews] = useState(false);
  const [displayFeedback, setDisplayFeedback] = useState(false);

  const handleNewsClick = () => {
    setDisplayNews(true);
    setDisplayFeedback(false); // Close feedback if open
  };

  const handleFeedbackClick = () => {
    setDisplayFeedback(true);
    setDisplayNews(false); // Close news if open
  };

  const handleLogoClick = () => {
    setDisplayNews(false);
    setDisplayFeedback(false);
  };

  return (
    <div className="App">
      <NavigationBar
        onNewsClick={handleNewsClick}
        onFeedbackClick={handleFeedbackClick}
        onLogoClick={handleLogoClick}
      />
      {!displayNews && !displayFeedback && (
        <>
          <WelcomeSection />
          <AboutSection />
          <ServicesSection />
          <ChooseUsSection />
          <ReviewsSection />
          <DownloadSection />
          <Footer />
        </>
      )}
      {displayNews && <NewsComponent />}
      {displayFeedback && <Feedback />}
    </div>
  );
}

export default App;
