
import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from 'react-router-dom';
const HomeCardTitle = () => {
    return (
        <div className='flex font-philospar items-center flex-col justify-center mt-20'>
            <p className='text-xl font-bold'>--- Sip & Savor ---</p>
            <h1 className='text-4xl font-bold'>Our Popular Products</h1>
           <Link to='getcoffee'> <button className='border-l-2 flex text-xl items-center gap-3 border-orange-600  bg-orange-900 py-1 px-4 rounded text-white mt-3 font-philospar '>Add Coffee <GiCoffeeCup className='text-xl'/> </button></Link>
        </div>
    )
}

export default HomeCardTitle