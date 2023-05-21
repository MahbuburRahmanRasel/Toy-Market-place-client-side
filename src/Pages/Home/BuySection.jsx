import React from "react";

const BuySection = () => {
  return (
    <div>
      <div className="    my-10">
        <div className=" flex flex-col lg:flex-row-reverse my-container gap-10 justify-between items-center">
          <div className=" relative w-1/2">
          <img
            src="https://i.ibb.co/txxbd3m/banner-bg-8.jpg"
            className=" rounded-lg shadow-2xl zoom"
          />
          <img src="https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/png-15.png" alt="" 
          
          className="absolute bottom-0 -left-10 animate-spin-slow-custom w-1/3  "/>
          </div>

          <div className="w-1/2 my-auto mx-auto text-center">
            <h1 className="lg:text-5xl text-3xl font-bold my-text-2">Baby’s Smile Our Joy </h1>
            <p className="py-6">
            Getting a toy is a new and exciting experience for child. They are learning about the world around them and exploring new things, and getting a toy is a way for them to do that.
            </p>
            <button className="btn my-btn-2">Explore Toys</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySection;
