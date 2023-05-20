import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const Updatedtoy = () => {

    const mytoys = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
       
        const quantity = form.quantity.value;
        const details = form.details.value;
        const price = form.price.value;
        const updatedtoy = {
          quantity,
          price,
          details,
        };
        console.log(updatedtoy);

        fetch(`http://localhost:5000/addtoys/${mytoys._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedtoy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Wonderful',
                        confirmButtonColor: '#DB915E'


                    })
                }
            })
    }
    
        
   



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
          <form onSubmit={handleUpdate}>
            <div className="  mx-auto">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available quantity"
                  className="input input-bordered"
                  name="quantity"
                  defaultValue={mytoys.quantity}
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
                  defaultValue={mytoys.price}
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
                  defaultValue={mytoys.details}
                />
              </div>
            </div>
            <div className='flex '>
            <div className="form-control mt-6  mx-auto">
              <input
                type="submit"
                value="Update Toy"
                className="btn my-btn-1"
              />
            </div>
           <Link to='/mytoys'>
           <div className="form-control mt-6  mx-auto">
              <input
                type="submit"
                value="Go to My Toys"
                className="btn my-btn-4"
              />
            </div>
           
           
           </Link>
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

export default Updatedtoy;