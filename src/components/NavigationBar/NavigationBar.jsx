import React, { useState, useEffect } from "react";
import { RxHamburgerMenu as OpenMenu } from "react-icons/rx";
import { CgClose as HideMenu } from "react-icons/cg";
import "./NavigationBar.css";

const NavigationBar = ({ onNewsClick, onFeedbackClick, onLoginClick, onSignupClick, onLogoClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      window.innerWidth > 1200 && setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navBar">
      <div className="leftSection">
        <a
          href="#"
          onClick={onLogoClick}
          style={{ textDecoration: "none", outline: "none" }}
        >
          <div className="companyLogo">
            <img src="/images/logo.png" alt="Company Logo" />Home
          </div>
        </a>
        <div className="navBtns">
          <div className="navDropdown">
            <button>About Us</button>
            <div className="aboutDropdownMenu">
              <div className="menuItem">
                <h3>Who We Are</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                  At Student Hub, we're a dynamic community fostering academic excellence and open communication through curated resources and an engaging anonymous messaging platform. Join us to elevate your learning experience and connect with a supportive network of students
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menuItem">
                <h3>Our Mission</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                  Our mission is to empower students with knowledge, support, and meaningful connections through innovative resources and a vibrant community.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menuItem">
                <h3>Meet the Team</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                    See all the amazing members of our team who help make our
                    goals become reality.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="navDropdown">
            <button>Services</button>
            <div className="serviceDropdownMenu">
              <div className="menuItem">
                <h3>News</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                  Stay updated with the latest happenings in the education world and beyond. Our news section covers a wide range of topics, from educational reforms to global trends, ensuring you're always in the know.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menuItem">
                <h3>Colleges</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                    Explore a comprehensive directory of colleges and universities, complete with detailed profiles, admission requirements, and student reviews. Find the perfect institution to further your education and career aspirations.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menuItem">
                <h3>Messaging</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                  Experience the freedom of open communication with our secure and anonymous messaging platform, designed to foster genuine connections and facilitate honest conversations.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menuItem">
                <h3>Resources</h3>
                <hr />
                <div className="dropdownDescription">
                  <p>
                  Our website is your hub of knowledge, providing a wide array of resources from news updates to academic materials, enriching every step of your educational journey.
                    <span>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button>college</button>
          {/* <button>Blog</button> */}
          <button onClick={onNewsClick}>News</button>
          <button onClick={onFeedbackClick}>Feedback</button>
        </div>
      </div>
      <div className="rightSection">
        <div className="accountSection">
        <button onClick={onLoginClick}>Login</button>
          <button onClick={onSignupClick}>Sign Up</button>
        </div>
        <div className="menuSection">
          {menuOpen ? (
            <HideMenu className="hideBtn" onClick={() => setMenuOpen(false)} />
          ) : (
            <OpenMenu className="menuBtn" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>
      <div
        className="sideMenu"
        style={{ display: !menuOpen || width > 1200 ? "none" : "flex" }}
      >
        <div className="sideMenuSiteSections">
          <button>About Us</button>
          <button>Services</button>
          <button>college</button>
          <button></button>
          <button onClick={onNewsClick}>News</button>
          <button onClick={onFeedbackClick}>Feedback</button>
        </div>
        <div className="sideMenuContent">
          <div className="sideMenuAccountHeader">
            <h1>Login or Sign Up</h1>
          </div>
          <div className="loginSignUpSection">
            <div className="sideMenuAccountBtns">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
            <div className="disclaimer">
              &copy; Company. All rights reserved. All trademarks are property
              of their respective owners in the US and other countries.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
