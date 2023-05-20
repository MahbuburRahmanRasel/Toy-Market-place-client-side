import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailToy = () => {

    const singleToy = useLoaderData()

    const {picture,toyname,subcategory, sellername, email,price, rating, quantity,details} = singleToy




    return (
        <div>
        
          <div className=" min-h-screen bg-base-200 my-container mt-4">
            <div className=" flex gap-10 justify-between">
              <img
                src={picture}
                className="h-screen rounded-lg shadow-2xl lg:w-1/2 animate-jump"
              />
              <div className="lg:w-1/2 space-y-3">
                <h1 className="text-5xl font-bold my-text-1">{toyname}</h1>
                <h2 className="text-4xl">${price}</h2>
                <p className="py-6">
                  {details}
                </p>
    
                <h3 className="text-3xl my-text-2">Other Informations </h3>
                <h4 className=""> Sub Category: {subcategory}</h4>
                <p>Seller Name : {sellername}</p>
                <p>Seller Email : {email}</p>
                <p>Available Quantity : {quantity}</p>
                <p>Rating: {rating}</p>
                <button className="btn my-btn-1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default DetailToy;