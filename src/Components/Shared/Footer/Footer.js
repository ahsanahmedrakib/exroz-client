import React from 'react';

const Footer = () => {
    return (
        <div>
          <footer>
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-8 col-12">
						<h6>Exroz</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni provident voluptatem, consequatur porro alias.</p>
						<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et repudiandae nulla obcaecati accusamus iusto nam consequat</p>
					</div>
					<div className="col-md-2 col-sm-4 col-12">
						<h5>Quick Link</h5>
						<ul>
							<li><a href="">About us</a></li>
							<li><a href="">Pricing</a></li>
							<li><a href="">Services</a></li>
							<li><a href="">Blog</a></li>
							<li><a href="">Contact us</a></li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6 col-12">
						<h5>Recents Post</h5>
						<ul>
							<li><a href="">We will increase your busin . . . .</a></li>
							<li><a href="">Make your laptop as compute . . . .</a></li>
							<li><a href="">Trending trick for you wor . . . .</a></li>
							<li><a href="">Create faster landing page tem . . . .</a></li>
							<li><a href="">Business now is very easy usi . . . .</a></li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6 col-12">
						<h5>Contact us</h5>
						<ul>
							<li><i className="fa fa-envelope"></i> astylers97@gmail.com</li>
							<li><i className="fa fa-phone"></i> +61 3 8376 6284</li>
							<li className="map"><i className="fa fa-map-marker"></i> <p>121 King Street, Melbourne
							Victoria 3000 Australia</p></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		
		<div className="footer-bottom">
			<div className="container">
				<p>Copyright © All Right Reserved</p>
			</div>
		</div>
        </div>
    );
};

export default Footer;