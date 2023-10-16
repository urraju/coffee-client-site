import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const SingleCoffee = () => {
  const singleCoffee = useLoaderData();
  const { name, price, photo, supplier, taste, category, details } =
    singleCoffee;
  return (
    <div className="w-full mt-20 p-5 md:p-3 ">
      <div className="bg-[#F4F3F0] border-l-4 border-orange-900 rounded-lg mb-20 md:w-9/12 mx-auto flex items-center hover:shadow-lg justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <img src={photo} alt="" />
          <div className="font-philospar ml-10 py-5 md:ml-0 md:py-0">
            <h1 className="text-3xl font-bold mb-5">NiceTies</h1>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Name : </span>{name}</p>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Price : </span>{price}</p>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Supplier : </span>{supplier}</p>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Taste : </span>{taste}</p>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Category : </span>{category}</p>
            <p className="font-light text-gray-500"><span className="font-bold text-lg text-orange-950">Details : </span>{details}</p>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleCoffee;
