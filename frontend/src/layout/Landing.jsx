import React from 'react';
import NavbarLanding from './NavbarLanding';

const Landing = () => {
  return (
    <div className="bg-[url('/white-bg.jpg')] bg-cover bg-center min-h-screen">
        <div className="bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 min-h-screen">
            <NavbarLanding />
            <div className="container mx-auto flex flex-col md:flex-row items-center py-16">
                <div className="md:w-1/2 w-full p-6">
                    <h1 className="text-6xl font-bold mb-4"><i className='text-gray-600'>TO - DO</i>  LIST<br /> on <i className='text-gray-600'>ROGER</i></h1>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti voluptate it amet consectetur adipisicing elit. Ad corrupti volupsed non debitis excepturi architecto...
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-700 transition text-white px-6 py-3 rounded-sm font-extralight">
                        GET STARTED
                    </button>
                </div>
                <div className="md:w-1/2 w-full flex justify-center items-center p-6">
                    <img src="" alt="" className="max-w-sm rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;
