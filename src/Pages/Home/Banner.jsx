import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Banner = () => {

 


  const textBanner = (
    <>
      <div className="absolute  flex pt-20 lg:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-2 lg:space-y-7 pl-20    lg:pl-36 lg:w-1/2 ">
          <h2 className=" text-lg lg:text-6xl font-bold">
            The best toys for the best kids
          </h2>
          <p>The perfect place to find babys next favorite toy.</p>
          <div>
           <Link to='/alltoys'> <button className="btn my-btn-1 mr-5">All toys</button></Link>
            
          </div>
        </div>
      </div>
      
    </>
  );

  return (
    
    <div>
      <div className="carousel w-full lg:h-[500px] mt-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Jp3dLvp/banner-bg-4.webp"
            className="w-full object-cover"
          />

          {textBanner}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn  my-btn-1">
            <FaAngleLeft/>
            </a>
            <a href="#slide2" className="btn  my-btn-1">
              <FaAngleRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/5GFrb5G/banner-bg-6.jpg"
            className="w-full object-cover"
          />
           {textBanner}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn my-btn-1">
              ❮
            </a>
            <a href="#slide3" className="btn my-btn-1">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/R762W4k/banner-bg-9.jpg"
            className="w-full object-cover"
          />
           {textBanner}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn my-btn-1">
              ❮
            </a>
            <a href="#slide4" className="btn my-btn-1">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LhMr920/banner-bg-5.jpg"
            className="w-full object-cover"
          />
           {textBanner}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn my-btn-1">
              ❮
            </a>
            <a href="#slide1" className="btn my-btn-1">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
