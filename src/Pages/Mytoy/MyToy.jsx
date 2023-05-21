import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Mytoytable from "./Mytoytable";
import Swal from "sweetalert2";
import TitleBanner from "../../SharedPages/TitleBanner";

const MyToy = () => {
  const { user } = useContext(AuthContext);

  const [mytoys, setMytoys] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://toy-market-place-server-alpha.vercel.app/mytoys/${user?.email}`
      )
        .then((res) => res.json())
        .then((result) => {
          setMytoys(result);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB915E",
      cancelButtonColor: "#708D77",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-market-place-server-alpha.vercel.app/mytoys/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = mytoys.filter((mytoy) => mytoy._id !== _id);
              setMytoys(remaining);
            }
          });
      }
    });
  };

  //text={`Kidland | Alltoys`}

  return (
    <>
      <TitleBanner text={`Kidland | My Toys`} />

      <div className="my-container">
        <h1 className="text-5xl font-bold  my-10 text-center my-text-1">
          Mytoys : {mytoys.length}
        </h1>

        <div className="w-full text-center ">
          <table className=" w-full">
            <col className="w-[5%]" />
            <col className="w-[25%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[40%]" />
            <col className="w-[10%]" />

            <thead>
              <tr>
                <th className="table-heading">Delete</th>
                <th className="table-heading">Name</th>
                <th className="table-heading">Price</th>
                <th className="table-heading">Quantity</th>
                <th className="table-heading">Details</th>
                <th className="table-heading"> Update</th>
              </tr>
            </thead>
            <tbody>
              {mytoys?.map((mytoy, index) => {
                return (
                  <Mytoytable
                    key={index}
                    mytoy={mytoy}
                    index={index}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToy;
