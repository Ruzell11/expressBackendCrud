import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <>
       <div className='flex justify-between items-center bg-white shadow-md p-5'>
        <div className='uppercase font-bold font-serif cursor-pointer'>
          <Link to='/'>
            <h1>To-do List App</h1>
            </Link>
        </div>
        <div >
            <ul className='flex space-x-5 font-bold font-serif cursor-pointer' >
             <Link to='/'>
             <li className='hover:text-gray-500'>Login</li>
             </Link>
               <Link to='/signup-page'>
               <li className='hover:text-gray-500'>Register</li></Link>
            </ul>
        </div>
       </div>
        </>
    )
}
export default Navbar;