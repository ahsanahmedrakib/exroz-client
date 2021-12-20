import React from "react";

const MyOrders = () => {
  return (
    <div className="container text-center">
      <h2>My Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
