import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
           
		<div className="home-intro">
			<div className="container">
				<div className="row">
					<div className="col col-sm-12 col-md-10 offset-md-1 col-12">
						<div className="content">
							<h5>We are Trusted</h5>
							<h2>EXPERT CONSTRUCTION</h2>
							<h6>We do it with all my heart and we are happy to help you increase your business and income</h6>
							<Link to="/about" className="button hbtn hb-fill-right">Learn More</Link> <Link to="/contact" className="button button-intro hbtn hb-fill-right">Contact us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	
        </div>
    );
};

export default Banner;