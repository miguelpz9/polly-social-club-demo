import React from 'react';
import pollyTitle from '../../assets/pollyTitle.png';
import socialClubSubTitle from '../../assets/socialClubSubTitle.png';

const Navbar = () => {
    return (
        <nav className="bg-tiffany60 fixed w-full font-title z-50 top-0 border-white border-b lg:px-2 px-4 py-2.5">
            <div className="container flex flex-nowrap flex-row justify-between items-center mx-auto">
                <a href="#" className="flex lg:justify-start items-center">
                    <img src={pollyTitle} className="mr-3 lg:mr-0 h-10" alt="Polly Social Club Logo" />
                </a>
                <div className="flex order-2 lg:w-full lg:justify-end">
                    <button type="button" className="text-tiffany bg-white hover:bg-tiffany hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 lg:mr-2 text-lg lg:text-sm lg:mt-2">Join the club</button>
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="lg:inline-flex items-center p-2 mr-4 text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="lg:hidden justify-between items-center lg:w-full flex w-auto order-1" id="mobile-menu-4">
                    <ul className="flex lg:flex-col lg:mt-4 flex-row space-x-8 mt-0 text-lg font-medium">
                    <li>
                        <a href="#header" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">About</a>
                    </li>
                    <li>
                        <a href="#utility" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">Utility</a>
                    </li>
                    <li>
                        <a href="#roadmap" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">Roadmap</a>
                    </li>
                    <li>
                        <a href="#team" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">Team</a>
                    </li>
                    <li>
                        <a href="#faq" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">Faq</a>
                    </li>
                    <li>
                        <a href="/store" className="block py-2 px-4 rounded-lg text-white border-gray-100 hover:bg-tiffany30 md:hover:bg-transparent md:border-0">Store</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  };
  
  export default Navbar;