import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddPricing = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://fierce-meadow-33737.herokuapp.com/pricing", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((pricing) => {
        if (pricing.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      {success && (
        <div
          className="alert alert-success alert-dismissible fade show col-md-8 m-auto mt-5"
          role="alert"
        >
          Added pricing succefully
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
          {...register("pricing", { required: true })}
          placeholder="Pricing name"
        />
        <input
          className="form-control"
          {...register("price", { required: true })}
          placeholder="Price"
        />
        <input
          className="form-control"
          {...register("feature1", { required: true })}
          placeholder="Feature1"
        />
        <input
          className="form-control"
          {...register("feature2", { required: true })}
          placeholder="Feature2"
        />
        <input
          className="form-control"
          {...register("feature3", { required: true })}
          placeholder="Feature3"
        />
        <input
          className="form-control"
          {...register("feature4", { required: true })}
          placeholder="Feature4"
        />
        <input
          className="form-control"
          {...register("feature5", { required: true })}
          placeholder="Feature5"
        />

        <button className="button hbtn hb-fill-right">Add</button>
      </form>
    </div>
  );
};

export default AddPricing;
