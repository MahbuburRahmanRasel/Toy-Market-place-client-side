import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';

const AllToys = () => {

    const [allToys , setAllToys] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/mytoys')
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    },[])



    return (
        <div className="my-container">
      <h1 className="text-5xl font-bold  my-10 text-center my-text-1"></h1>

      <div className="w-full text-center ">
        <table className=" w-full">
          <col  className="w-[5%]"/>
          <col className="w-[25%]"/>
          <col className="w-[10%]"/>
          <col  className="w-[10%]"/>
          <col className="w-[40%]" />
          <col className="w-[10%]" />
        
          <thead>
            <tr >
              <th className="table-heading">
                No.
              </th>
              <th className="table-heading">Name</th>
              <th className="table-heading">Price</th>
              <th className="table-heading">Quantity</th>
              <th className="table-heading">Seller Name</th>
              <th className="table-heading"> Details</th>
            </tr>
          </thead>
          <tbody>

            {
                allToys?.map( (mytoy , index) =>{
                    return <AllToy
                    key={index}
                    
                    mytoy = {mytoy}
                    index= {index}
                   
                    
                    />
                })
            }


           
          </tbody>
          
          
        </table>
      </div>
    </div>
    );
};

export default AllToys;