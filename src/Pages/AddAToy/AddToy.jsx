import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const AddToy = () => {
 
  const { user } = useContext(AuthContext);
  

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyname = form.toyname.value;
    const picture = form.picture.value;
    const sellername = form.sellername.value;
    const subcategory = form.subcategory.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const email = form.email?.value;
    const price = form.price.value;
    const order = {
      picture,
      toyname,
      sellername,
      email,
      subcategory,
      rating,
      quantity,
      price,
      details,
    };
    console.log(order);

    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success',
            text: 'Add a toy successfully',
            imageUrl: 'https://i.ibb.co/D7VpT9T/doll.webp',
            imageWidth: 174,
            imageHeight: 200,
            confirmButtonColor: '#DB915E',
            
          })
        }
      });
  };

  return (
    <div>
      <div className="card-body my-container grid grid-cols-3">
        <div>
          <img
            src="https://i.ibb.co/TLP6HVJ/bird-1.jpg"
            alt=""
            className="w-1/2 mx-auto animate-jump-2"
          />
        </div>
        <div>
          <form onSubmit={handleCheckout}>
            <div className="  mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Picture Url </span>
                </label>
                <input
                  type="text"
                  placeholder="Picture Url"
                  className="input input-bordered"
                  name="picture"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Toy Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="toyname"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  name="sellername"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub-category"
                  className="input input-bordered"
                  name="subcategory"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  name="rating"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available quantity"
                  className="input input-bordered"
                  name="quantity"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Detail description"
                  className="input input-bordered"
                  name="details"
                  rows="20"
                  cols="50"
                />
              </div>
            </div>
            <div className="form-control mt-6  mx-auto">
              <input
                type="submit"
                value="Order Confirm"
                className="btn my-btn-1"
              />
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://i.ibb.co/yRw7jsR/brown-teddy.jpg"
            alt=""
            className="w-1/2 mx-auto my-40 animate-spin-slow-custom"
          />
        </div>
      </div>
    </div>
  );
};

export default AddToy;
