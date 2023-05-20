import React from "react";
import { useNavigate } from "react-router-dom";

const Mytoytable = ({ mytoy,handleDelete }) => {
  const { _id,picture, toyname, subcategory, price, quantity, details } = mytoy;

  const navigate = useNavigate()

  const handleUpdate = (id)=>{

  }

  


  return (
    <tr className="text-center">
      <th >
        <button className="btn my-btn-1" 
        
        onClick={()=>handleDelete(_id)}
        
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyname}</div>
            <div className="text-sm opacity-50">{subcategory}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{details}</td>
      <th>
        <button className="btn my-btn-1 btn-xs"
        
       onClick={()=>handleUpdate(_id)}
        >Update</button>
      </th>
      <hr  className="my-text-1"/>
    </tr>
  );
};

export default Mytoytable;
