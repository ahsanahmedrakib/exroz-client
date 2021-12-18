import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div>
            <div className="our-work">
			<div className="container">
				<div className="title-section">
					<h3>Our <span>Fantastic</span> Work</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit dolore vel voluptatum libero consectetur accusamus! Ipsum qui veniam nemo nisi.</p>
				</div>
			</div>
			<div className="row no-gutters">
				<div className="col-md-6 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/fHZLhXv/work1.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building Bridge</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/yYSwjnP/work2.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building Home</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/yB42HTz/work3.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building Home</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/vq4wr4z/work4.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building House</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/HYz10bR/work5.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building Home</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-6 col-sm-4 col-12">
					<div className="content imghvr-fade">
						<img src="https://i.ibb.co/M758gr6/work6.jpg" alt="" />
						<Link to="">
							<div className="caption">
								<h6>Building Home</h6>
								<p>Construction</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
};

export default Work;