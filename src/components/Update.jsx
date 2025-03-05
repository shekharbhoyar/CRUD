import React from "react";

function Update() {
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            
            ></input>
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              
            ></input>
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
