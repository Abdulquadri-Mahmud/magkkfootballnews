import React, { useState } from 'react'
import { FaLock, FaPhone, FaRegUser } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Sign_up() {
    const [formData, setFormData] = useState({});
    const [error, setSetError] = useState(null);
    const [loading, setLoading ] = useState(false);
    
    const handlChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    
    console.log(formData);
    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <div className='md:py-10 py-12'>
        <div className="relative bg-white md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
            <div className="">
                <h2 className="text-3xl font-medium text-center">Register Now</h2>
                <p className="text-center text-gray-400 text-sm pt-2">Our pride is to give you the best</p>
            </div>
            <form onClick={handleSubmit} className='mt-5'>
                <div className="shadow-md rounded-md relative">
                    <FaRegUser className='absolute left-2 top-4'/>
                    <input onChange={handlChange} id='username' type="text" placeholder='Username' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none'/>
                </div>
                <div className="shadow-md rounded-md relative">
                    <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                    <input onChange={handlChange} id='email' type="text" placeholder='Example@gmail.com' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none'/>
                </div>
                <div className="mt-5 shadow-md rounded-md relative">
                    <TbPasswordUser className='absolute left-2 top-4'/>
                    <input onChange={handlChange} id='password' type="password" placeholder='Password goes here' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none'/>
                    <FaLock className='absolute right-2 top-4'/>
                </div>
                {/* <div className="mt-5 text-end text-blue-500 font-medium text-sm underline animate-bounce">
                    <Link to={'/forgot_password'}>Forgot Password</Link>
                </div> */}
                <div className="w-full mt-6">
                    <button className='bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl'>Log In</button>
                </div>
            </form>
            <div className="pt-6 text-sm flex gap-2 items-center font-medium">
                <p className="">Already have an account?</p>
                <Link to={'/admin_signin'} className='text-blue-500 underline'>Sign In</Link>
            </div>
        </div>
    </div>
  )
}
