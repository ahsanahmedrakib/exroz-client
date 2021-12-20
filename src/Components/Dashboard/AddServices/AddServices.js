import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const [success, setSuccess] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((service) => {
        if (service.insertedId) {
          setSuccess("Service added successfully");
          reset()
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
              {success}
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
          {...register("font", { required: true })}
          placeholder="Font postfix name"
        />
        <input
          className="form-control"
          {...register("name", { required: true })}
          placeholder="Service name"
        />
        <textarea
          className="form-control"
          {...register("description", { required: true, min: 10 })}
          placeholder="Description"
        />
        <button className="button hbtn hb-fill-right">Add</button>
      </form>
    </div>
  );
};

export default AddServices;
