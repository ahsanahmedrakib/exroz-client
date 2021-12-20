import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../Shared/Header/Header";

const Orders = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  //load a single pricing by id
  useEffect(() => {
    const url = `https://fierce-meadow-33737.herokuapp.com/order/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    fetch("https://fierce-meadow-33737.herokuapp.com/orders", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((orders) => {
        if (orders.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="header-title">
        <div className="container">
          <h3>Order</h3>
        </div>
      </div>
      <div className="container">
        {success && (
          <div
            className="alert alert-success alert-dismissible fade show col-md-8 m-auto mt-5"
            role="alert"
          >
            Ordered succefully
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container col-md-8 m-auto col-lg-8 py-4"
        >
          <input
            className="form-control"
            {...register("name", { required: true })}
            defaultValue={user.displayName}
          />
          <input
            className="form-control"
            {...register("pricing", { required: true })}
            defaultValue={order.pricing}
          />
          <input
            className="form-control"
            {...register("price", { required: true })}
            defaultValue={order.price}
          />
          <input
            className="form-control"
            {...register("address", { required: true })}
            placeholder="Enter your address"
          />
          <input
            className="form-control"
            type="number"
            {...register("phone", { required: true })}
            placeholder="Enter your phone number"
          />

          <button className="button hbtn hb-fill-right">Order now</button>
        </form>
      </div>
    </div>
  );
};

export default Orders;
