// App.js

import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ChooseUsSection from "./components/ChooseUsSection/ChooseUsSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSection/Login";
import Signup from "./components/SignupSection/Signup";
import NewsComponent from "./components/NewsSection/NewsComponent";
import Feedback from "./components/FeedbackSection/Feedback";
import "./index.css";

function App() {
  const [displayNews, setDisplayNews] = useState(false);
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);

  const handleNewsClick = () => {
    setDisplayNews(true);
    setDisplayFeedback(false); 
  };

  const handleFeedbackClick = () => {
    setDisplayFeedback(true);
    setDisplayNews(false); 
  };

  const handleLogoClick = () => {
    setDisplayNews(false);
    setDisplayFeedback(false);
    setDisplayLogin(false); 
    setDisplaySignup(false); 
  };

  const handleLoginClick = () => {
    setDisplayLogin(true);
    setDisplaySignup(false);
    setDisplayNews(false); 
    setDisplayFeedback(false); 
  };

  const handleSignupClick = () => {
    setDisplaySignup(true);
    setDisplayLogin(false); 
    setDisplayNews(false);
    setDisplayFeedback(false); 
  };

  return (
    <div className="App">
      <NavigationBar
        onNewsClick={handleNewsClick}
        onFeedbackClick={handleFeedbackClick}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onLogoClick={handleLogoClick}
      />
      {!displayNews && !displayFeedback && !displayLogin && !displaySignup && (
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
      {displayLogin && <Login />}
      {displaySignup && <Signup />}
    </div>
  );
}

export default App;
