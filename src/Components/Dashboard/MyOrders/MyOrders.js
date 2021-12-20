import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const url = `https://fierce-meadow-33737.herokuapp.com/myorders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, orders]);

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
      <h2 className="text-center text-warning my-3">My Orders</h2>
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
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Order name</th>
              <th scope="col">Email</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th>{order.pricing}</th>
                <th>{order.email}</th>
                <td>{order.price}</td>
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

export default MyOrders;
