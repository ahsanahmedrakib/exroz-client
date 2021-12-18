import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Pricing = () => {
  return (
    <div>
      <Header />
      <div className="header-title">
        <div className="container">
          <h3>Pricing</h3>
        </div>
      </div>

      <div className="pricing section bg-grey">
        <div className="container">
          <div className="row">
            <div className="col col-md-4 col-sm-12 col-12">
              <div className="content">
                <h5>Architecture</h5>
                <h3>$550</h3>
                <ul>
                  <li> Consultating</li>
                  <li> Revision</li>
                  <li> Support Unlimited</li>
                  <li> Cloud Hosting</li>
                  <li> Free Ebook</li>
                  <li> Tshirt Comunity</li>
                  <li> Online Tutorial</li>
                  <li> and Many More</li>
                </ul>
                <a href="hj" className="button hbtn hb-fill-right">
                  Get Now
                </a>
              </div>
            </div>
            <div className="col col-md-4 col-sm-12 col-12">
              <div className="content">
                <div className="heads">
                  <h5>Building</h5>
                  <h3>$980</h3>
                </div>
                <ul>
                  <li> Consultating</li>
                  <li> Revision</li>
                  <li> Support Unlimited</li>
                  <li> Cloud Hosting</li>
                  <li> Free Ebook</li>
                  <li> Tshirt Comunity</li>
                  <li> Online Tutorial</li>
                  <li> and Many More</li>
                </ul>
                <a href="k" className="button hbtn hb-fill-right">
                  Get Now
                </a>
              </div>
            </div>
            <div className="col col-md-4 col-sm-12 col-12">
              <div className="content last-content">
                <h5>Renovation</h5>
                <h3>$400</h3>
                <ul>
                  <li> Consultating</li>
                  <li> Revision</li>
                  <li> Support Unlimited</li>
                  <li> Cloud Hosting</li>
                  <li> Free Ebook</li>
                  <li> Tshirt Comunity</li>
                  <li> Online Tutorial</li>
                  <li> and Many More</li>
                </ul>
                <a href="j" className="button hbtn hb-fill-right">
                  Get Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
