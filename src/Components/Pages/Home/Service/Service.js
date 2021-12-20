import React, { useEffect, useState } from 'react';

const Service = () => {

	const [allServices, setAllServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
		.then(res => res.json())
		.then(data => setAllServices(data))
	},[allServices])

    return (
        <div>
            <div className="services section bg-grey">
			<div className="container">
				<div className="title-section">
					<h3>Construction <span>Service</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit dolore vel voluptatum libero consectetur accusamus! Ipsum qui veniam nemo nisi.</p>
				</div>
				<div className="row">
					{ allServices.map(service => <div key={service._id} className="col col-md-4 col-sm-12 col-12">
						<div className="content">
							<i className={`fa fa-${service.font}`}></i>
							<h5>{service.name}</h5>
							<p className="mb-0" style={{ textAlign: "justify" }}>{service.description.slice(0,120)}...</p>
						</div>
					</div>)
					
}
{/* 
					<div className="col col-md-4 col-sm-12 col-12">
						<div className="content">
							<i className="fa fa-dumbbell"></i>
							<h5>Architecture</h5>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam maxime eos, culpa minus placeat.</p>
						</div>
					</div>
					<div className="col col-md-4 col-sm-12 col-12">
						<div className="content">
							<i className="fa fa-wrench"></i>
							<h5>Renovation</h5>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam maxime eos, culpa minus placeat.</p>
						</div>
					</div>
                    <div className="col col-md-4 col-sm-6 col-12">
						<div className="content">
							<i className="fa fa-door-open"></i>
							<h5>Repair Door</h5>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam maxime eos, culpa minus placeat.</p>
						</div>
					</div>
					<div className="col col-md-4 col-sm-6 col-12">
						<div className="content">
							<i className="fa fa-spa"></i>
							<h5>Water Fountain</h5>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam maxime eos, culpa minus placeat.</p>
						</div>
					</div>
					<div className="col col-md-4 col-sm-6 col-12">
						<div className="content">
							<i className="fa fa-cog"></i>
							<h5>Maintenance</h5>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam maxime eos, culpa minus placeat.</p>
						</div>
					</div>
					 */}
				</div>
			</div>
		</div>
        </div>
    );
};

export default Service;