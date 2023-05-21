import React, { useContext } from "react";

import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";
import './Category.css'
import 'animate.css';
import { useNavigate } from "react-router-dom";




const Category = ({ ft }) => {

  
  const { user} = useContext(AuthContext);

  const navigate = useNavigate();
  const {_id,picture,toy_name,price,rating }= ft



  const handleToast = (id)=>{
    if(!user){

      Swal.fire({
        title: 'You have to Login first',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonColor: '#DB915E',
        
   
      })

    }
    else{navigate(`/toy/${id}`)}
  }

  return (
    
    <div  className="lg:grid lg:grid-cols-3 mx-auto ">
     
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt=""
            className="h-40 zoom"
          />
        </figure>
        <div className="card-body mx-auto text-center">
          <h2 className="card-title my-text-2 mx-auto">{toy_name}</h2>
          <p>Price: ${price}</p>
          <p>rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn my-btn-1 mx-auto"
            
           onClick={()=>handleToast(_id)}
            
            
            >View Details</button>
          </div>
        </div>
      </div>
      
    </div>
   
  );

    
   
  
};

export default Category;
