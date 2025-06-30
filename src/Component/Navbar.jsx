import React from 'react';
import { images } from '../assets/asset';

const Navbar = () => {


    const link = <><li><a className='font-semibold text-sm md:text-xl' href='#home'>Home</a></li>
        <li><a className='font-semibold text-sm md:text-xl' href='#about_me'>About Me</a></li>
        <li><a className='font-semibold text-sm md:text-xl' href='#skill'>Skill</a></li>
        <li><a className='font-semibold text-sm md:text-xl' href='#project'>Project</a></li>
        <li><a className='font-semibold text-sm md:text-xl' href='#contact_me'>Contact Me</a></li></>

    return (
        <div className="navbar bg-gray-800/70 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <a href='#home' className="text-xl"> <img className='w-14' src={images.alternativeLogo} alt="logo" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-4 menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-600 rounded-none">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;