import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../../redux/slices/blogSlice";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Pricing = () => {
  // const [allPricing, setAllPricing] = useState([]);

  // useEffect(() => {
  //   fetch("https://fierce-meadow-33737.herokuapp.com/pricing")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllPricing(data);
  //     });
  // }, [allPricing]);

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchBooks());
  }, [dispatch])

  const books = useSelector((state) => state.books.discover)


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
            {books.map((pricing) => (
              <div key={pricing._id} className="col col-md-4 col-sm-12 col-12">
                <div className="content">
                  <h5>{pricing.pricing}</h5>
                  <h3>${pricing.price}</h3>
                  <ul>
                    <li> {pricing.feature1}</li>
                    <li> {pricing.feature2}</li>
                    <li> {pricing.feature3}</li>
                    <li> {pricing.feature4}</li>
                    <li> {pricing.feature5}</li>
                  </ul>
                  <Link
                    to={`/order/${pricing._id}`}
                    className="button hbtn hb-fill-right"
                  >
                    Get Now
                  </Link>
                </div>
              </div>
            ))}
            {/* <div className="col col-md-4 col-sm-12 col-12">
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
