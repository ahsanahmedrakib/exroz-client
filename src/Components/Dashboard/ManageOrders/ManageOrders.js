import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    return (
        <div className='container text-center'>
            <h2>This is manage order</h2>
            <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Order name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
         {orders.map(order =>  <tr>
              <th scope="row">{order.name}</th>
              <td>{order.pricing}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              <td><button className='btn btn-danger'>X</button></td>
            </tr>)   
       
        }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageOrders;