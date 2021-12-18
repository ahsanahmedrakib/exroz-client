import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = {email}
        fetch('http://localhost:5000/users', {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
                setEmail('');
            }

        })
        e.preventDefault();
    }
    return (
        <div>
            <DashboardHeader />
            <h2 className='text-center py-3'>Make an admin</h2>
            <form className='col-md-6 m-auto' onSubmit={handleAdminSubmit}>
            {success &&  <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Make admin successfully
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>}
                <input onBlur={handleOnBlur} type="text" className='form-control mb-3' required/>
                <button className='btn btn-warning'>Make</button>
            </form>
        </div>
    );
};

export default MakeAdmin;