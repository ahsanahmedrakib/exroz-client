import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://fierce-meadow-33737.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://fierce-meadow-33737.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleted(true);
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="container text-center">
      <h2 className="mb-3 py-2 text-warning">Manage Orders</h2>
      {deleted && (
        <div
          className="alert alert-danger alert-dismissible fade show col-md-8 m-auto"
          role="alert"
        >
          Orders successfully deleted
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Email</th>
              <th scope="col">Order name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th scope="row">{order.name}</th>
                <th scope="row">{order.email}</th>
                <td>{order.pricing}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
