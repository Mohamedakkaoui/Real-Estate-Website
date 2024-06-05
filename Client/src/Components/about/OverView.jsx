import React from 'react';
import { BiPlay } from "react-icons/bi";

const OverView = () => {
  return (
    <div className="pb-16">
      <div className="flex flex-wrap gap-4">
        <section className="w-full mx-auto py-10 bg-amber-50 dark:bg-gray-900 dark:text-white">
          <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl text-gray-900 font-semibold border-b-2 border-orange-400 dark:border-yellow-600">
            Our Vision
          </div>
          
          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <div className="lg:w-[50%] xs:w-full">
              <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full  dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Our Comprehensive Real Estate Platform
              </h2>
              <p className="text-xl mt-4 ">
                Our website is a comprehensive platform dedicated to real estate. We facilitate the buying, selling, and renting of properties, empowering users to manage their own listings. Our agency also offers professional services to assist with property transactions, ensuring a seamless experience for all our clients.
              </p>
            </div>
          </div>
          
          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <div className="md:hidden sm:block xs:block xs:w-full">
              <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
            </div>
            <div className="lg:w-[50%] xs:w-full  dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Our Commitment to Excellence
              </h2>
              <p className="text-xl mt-4">
                We are dedicated to providing exceptional service and support to all our clients. Our team of experts is committed to ensuring a smooth and successful real estate experience, whether you are buying, selling, or renting a property. Trust us to be your reliable partner in all your real estate endeavors.
              </p>
            </div>
            <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
              <img className="lg:rounded-t-lg xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverView;
