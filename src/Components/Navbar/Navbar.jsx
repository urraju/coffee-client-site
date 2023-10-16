import React, { useState } from "react";
import { Link, NavLink  } from "react-router-dom";
import logo from "../../assets/images/more/logo1.png";

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const manu = (
    <>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "isLoading" : isActive ? "text-cyan-600 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "isLoading" : isActive ? "text-cyan-600 underline" : ""
        }
        to="/getcoffee"
      >
        Get Coffee
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "isLoading" : isActive ? "text-cyan-600 underline" : ""
        }
        to="/update"
      >
        Update
      </NavLink>
    </>
  );
  return (
    <div className="bg-backgroud bg-cover ">
      <div className="w-9/12 mx-auto p-1 flex flex-col md:flex-row items-center text-white justify-between font-philospar">
        <div>
         <Link to='/'  className="flex items-center gap-3">
           <img className="w-10" src={logo} alt="" />
          <p className="text-white text-2xl font-philospar font-semibold">
            Espresso Emporium
          </p></Link>
        </div>

        <div>
        <div className="flex mb-5 md:mb-0 gap-6">{manu}</div>
        </div>

        <div className="hidden md:block">
          <Link to="/login">
            <button className="px-4 py-1 bg-orange-900 rounded ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
