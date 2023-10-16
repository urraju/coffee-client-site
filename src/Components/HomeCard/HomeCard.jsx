import React, { useState } from "react";
import { BsFillPencilFill, BsEyeFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const HomeCard = ({ data, dataD, setDataD }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffe-server-site.vercel.app/coffees/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((datadelete) => {
            console.log(data);

            if (datadelete.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaing = dataD.filter((cof) => cof._id !== data._id);
              setDataD(remaing);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="bg-[#F5F4F1] border-l-2 border-gray-400 rounded-l-md p-3 flex items-cente flex-col md:flex-row">
        <img className="w-48" src={data.photo} alt="" />
        <div className="flex w-full items-center justify-between">
          <div className="font-philospar">
            <p className="font-extralight">
              <span className="font-philospar font-extrabold text-lg">
                Name :{" "}
              </span>
              {data.name}
            </p>
            <p>
              <span className="font-philospar font-extrabold text-lg">
                Teste :{" "}
              </span>
              {data.taste}
            </p>
            <p>
              <span className="font-philospar font-extrabold text-lg">
                Price :{" "}
              </span>
              {data.price}
            </p>
          </div>
          <div className="flex text-white gap-2 flex-col pr-9">
            <Link to={`singlecoffee/${data._id}`}>
              {" "}
              <button className="bg-cyan-600 p-2 rounded-full">
                <BsEyeFill />
              </button>
            </Link>

            <Link to={`update/${data._id}`}>
              <button className="bg-black p-2 rounded-full">
                <BsFillPencilFill />
              </button>
            </Link>

            <button
              onClick={() => handleDelete(data._id)}
              className="bg-rose-600 p-2 rounded-full"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
