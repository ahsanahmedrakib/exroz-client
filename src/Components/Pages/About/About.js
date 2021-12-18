import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutUs from "../Home/AboutUs/AboutUs";
import Features from "../Home/Features/Features";

const About = () => {
  return (
    <div>
      <Header />
      <div className="header-title">
        <div className="container">
          <h3>About us</h3>
        </div>
      </div>
      <AboutUs />
      <Features />
      <Footer />
    </div>
  );
};

export default About;
