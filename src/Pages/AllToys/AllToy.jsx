import React from 'react';

const AllToy = ({mytoy,index}) => {

    const { _id,picture, toyname, subcategory, price, quantity, details,sellername } = mytoy;


    const handleDetail= (id)=>{
        
    }


    return (
        <tr className="text-center">
        <th >
          {index+1}
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
        <td>{sellername}</td>
        <th>
          <button className="btn my-btn-1 btn-xs text-sm"
          
         onClick={()=>handleDetail(_id)}
          >Details</button>
        </th>
        <hr  className="my-text-1"/>
      </tr>
    );
};

export default AllToy;