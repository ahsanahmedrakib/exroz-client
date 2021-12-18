import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Service from "../Home/Service/Service";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="header-title">
        <div className="container">
          <h3>Services</h3>
        </div>
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default Services;
