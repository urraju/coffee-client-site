
import React from 'react'
import logo  from '../../assets/images/more/logo1.png'
import { BsFacebook , BsTwitter, BsInstagram, BsLinkedin  } 
from "react-icons/bs";
import { FaLocationDot , } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
    return (
        <div className='bg-backgroudFooterUp w-full h-full bg-no-repeat bg-cover'>

            <div className='w-9/12 mx-auto flex-col md:flex-row flex items-center justify-between '>
                <div className='p-6 py-10 font-philospar'>
                    <img className='w-14' src={logo} alt="" />
                    <p className='text-2xl font-bold mb-2'>Espresso Emporium</p>
                    <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className='flex gap-3 mt-4 text-xl'>
                        <BsFacebook/>
                        <BsTwitter/>
                        <BsInstagram/>
                        <BsLinkedin/>
                    </div>
                    <h1 className='text-xl font-bold mt-3'>Get in Touch</h1>
                    <div className='mt-3'>
                            <div className='flex items-center gap-2'>
                                <BiSolidPhone/>
                                <a href="">01824526072</a>
                            </div>
                            <div  className='flex items-center gap-2'>
                                <IoMdMail/>
                                <a href="">riadhasan680@gmail.com</a>
                            </div>
                            <div  className='flex items-center gap-2'>
                                <FaLocationDot/>
                                <a href="">72, Wall street, King Road, Mymensingh</a>
                            </div>
                    </div>
                </div>
                {/* contact page  */}
                <div className='font-philospar '>
                    <h1 className='text-2xl font-bold mb-5'>Connect with Us</h1>
                    <div>
                        <input className=' block w-full md:w-3/4 mb-2 outline-none px-2 py-2 rounded border-l-2 border-orange-900' type="text" name='name' placeholder='Name' />
                        <input  className=' block w-full md:w-3/4 mb-2 outline-none px-2 py-2 rounded border-l-2 border-orange-900' type="email" name="email" id="" placeholder='Email'/>
                        <textarea  className=' block w-full md:w-3/4 mb-2 outline-none px-2 py-2 rounded border-l-2 border-orange-900' name="message" id="" cols="40" rows="" placeholder='Message'></textarea>
                    </div>
                    <button className=' border-l-2 border-orange-600 bg-orange-900 py-1 px-4 rounded text-white mt-3 font-philospar '>Send Message</button>
                </div>
            </div>
            <div className='bg-backgroudFooterDown text-white font-philospar p-4 text-center'>
                <p>&copy;Copyright! All Rights Reserved By Raju Ahmed</p>
            </div>
        </div>
    )
}

export default Footer