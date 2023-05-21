import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

import Category from "./Category";

import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [subcategory, setSubcategory] = useState("Animal Toy");

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${subcategory}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [subcategory]);

  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  const handleSubCategory = (tab) => {
    setSubcategory(tab);
  };
  console.log(subcategory);

  return (
    <div className="my-container">
      <h1 data-aos="fade-right" className="text-4xl mt-10 mb-5 text-center font-bold my-text-1">
        Shop By Category
      </h1>

      

      <div data-aos="fade-left"  className=" mx-auto text-center lg:mt-16 lg:mb-5">;

        <button 
        onClick={() => handleSubCategory("Animal Toy")}
        className={`btn my-btn-3 rounded-none ${subcategory === "Animal Toy" ? " my-btn-5" : ""} `}  
        >
          Animal Toy
          </button>
        <button 
        
        onClick={() => handleSubCategory("Bird Toy")}
        className={`btn my-btn-3 rounded-none ${subcategory === "Bird Toy" ? " my-btn-5" : ""} `}  
        
        >Bird Toy
        
        </button>


        <button 
        
        onClick={() => handleSubCategory("Teddy Toy")}
        className={`btn my-btn-3 rounded-none ${subcategory === "Teddy Toy" ? " my-btn-5" : ""} `} 

        >
          Teddy Toy
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-2  mx-auto  lg:ml-[150px]">
      {toys?.map((ft) => (
        <Category key={ft.index} ft={ft} />
      ))}
      </div>

     
    </div>
  );
};

export default ShopByCategory;
