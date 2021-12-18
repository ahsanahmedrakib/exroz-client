import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="about">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="content">
							<div className="title-section-left">
								<h3>Know More <span>About Us</span></h3>
								<h6>We are are professional</h6>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quaerat omnis ipsum consectetur voluptatum sed assumenda laboriosam amet voluptates blanditiis et natus error numquam molestias eos provident labore iure perspiciatis, aspernatur, ut soluta sint odit minima? Necessitatibus vero aut et incidunt nam porro veritatis hic</p>
							<ul>
								<li><i className="fa fa-check"></i> Professional in working</li>
								<li><i className="fa fa-check"></i> Low price but quality 100%</li>
								<li><i className="fa fa-check"></i> Has been many project to do</li>
								<li><i className="fa fa-check"></i> Working with love and heart</li>
								<li><i className="fa fa-check"></i> Planning briliant on working</li>
								<li><i className="fa fa-check"></i> Creative and smart in work</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<div className="content-image">
							<img src="https://i.ibb.co/q0y5RT8/about.png" alt="" className="w-100" />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-style"></div>
		</div>
        </div>
    );
};

export default AboutUs;