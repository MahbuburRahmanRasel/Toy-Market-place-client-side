import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToy from "./AllToy";
import TitleBanner from "../../SharedPages/TitleBanner";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  // const [searchtoys, setSerachtoys] = useState([]);
  const [searchText, setSerachtext] = useState("")

  useEffect(() => {
    fetch("https://toy-market-place-server-alpha.vercel.app/mytoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-market-place-server-alpha.vercel.app/getToysByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };


  return (
    <>
      <TitleBanner text={`Kidland | Alltoys`} />

     
        <div className="w-1/3 mx-auto flex justify-center items-center">
        <div className="form-control mb-3">
          <label className="label">
           
          </label>
          <input
            type="text"
            placeholder="Search Toy"
            className="input input-bordered"
            name="picture"
            onChange={(e) => setSerachtext(e.target.value)}
          />
        </div>
        <input type="submit" value="Search" className="btn my-btn-1"
        
        onClick={handleSearch}
        />
        </div>
  

      <div className="my-container">
        <h1 className="text-5xl font-bold  my-10 text-center my-text-1"></h1>

        <div className="w-full text-center ">
          <table className=" w-full">
            <thead>
              <tr>
                <th className="table-heading">No.</th>
                <th className="table-heading">Name</th>
                <th className="table-heading">Price</th>
                <th className="table-heading">Quantity</th>
                <th className="table-heading">Seller Name</th>
                <th className="table-heading"> Details</th>
              </tr>
            </thead>
            <tbody>
              {allToys?.map((mytoy, index) => {
                return <AllToy key={index} mytoy={mytoy} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToys;
