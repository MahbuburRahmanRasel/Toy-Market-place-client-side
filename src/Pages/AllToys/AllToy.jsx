import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const AllToy = ({mytoy,index}) => {

    const { _id,picture, toyname, subcategory, price, quantity, details,sellername } = mytoy;

    const { user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDetail= (id)=>{

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
          else{navigate(`/alltoys/${id}`)}

    }


    return (
        <tr className="text-center">
        <th >
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-5 justify-center">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className='text-center'>
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