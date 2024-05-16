import React, { useState } from "react";
import Logo from "../../assets/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import SignUp from "../Modal/SignUp";
import Login from "../Modal/Login";
import { ContextAuth } from "../../Context/AuthContext";

function Footer() {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { isLoggedIn } = ContextAuth();


  const openSignUpModal = (e) => {
    e.preventDefault()
    setShowSignUpModal(true);
    setShowLoginModal(false)
  }
  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  return (
    <>
      <footer className="bg-black font-sans dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12 ">
          <div className="flex flex-col lg:flex-row  justify-between items-center pb-7 mx-8">
            <div className="pb-7">
              <img src={Logo} alt="" />
            </div>
            <div className="flex gap-8">
              <FacebookIcon className="cursor-pointer text-white hover:text-[#FFA920]" />
              <InstagramIcon className="cursor-pointer text-white hover:text-[#FFA920]" />
              <LinkedInIcon className="cursor-pointer text-white hover:text-[#FFA920]" />
              <XIcon className="cursor-pointer text-white hover:text-[#FFA920]" />
            </div>
          </div>

          <hr className="my-6 border-gray-700 md:my-8 dark:border-gray-700 h-2" />

          <div className="grid grid-cols-1  sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5  justify-items-center">
            <div>
              <p className="font-semibold text-white dark:text-white">
                Popular Search
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white font-light transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Apartement for Rent
                </p>
                <p className="text-white font-light transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  House Low to Buy
                </p>
                <p className="text-white font-light transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Offices for Buy
                </p>
                <p className="text-white font-light transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Offices for Rent
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Discover
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white font-light transition-colors duration-300  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Rabat
                </p>
                <p className="text-white font-light transition-colors duration-300  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Kenitra
                </p>
                <p className="text-white font-light transition-colors duration-300  hover:cursor-pointer hover:text-[#FFA920] pb-2">
                  Tanger
                </p>
              </div>
            </div>

            {/* this si the button */}

            <div className="sm:col-span-2 lg:col-span-2 lg:pl-20">
              <h1 className="max-w-lg text-xl font-semibold mt-8 text-white xl:text-lg tracking-wide pl-4 mb-4 sm:mb-2">
                Keep Yourself Up To Date
              </h1>
              <div className="mt-4 flex justify-between w-full">
                <form className="flex w-full">
                  <input
                    style={{ outline: "none" }}
                    className="rounded-l-xl w-full lg:p-4 border-t lg:mb-2 p-2 sm:mr-0 sm:border-r sm:border border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder="Your Email"
                  />
                  <button
                    style={{ textTransform: "none" }}
                    className="px-8 rounded-r-xl bg-white text-black font-bold lg:mb-2 uppercase"
                    onClick={openSignUpModal}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <hr className="mt-6  border-gray-800 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between mr-20 ml-10">
            <p className="font-sans p-8 text-start text-white md:text-center md:text-md md:p-4">
              © RYMZ 2024 You Company - All rights reserved.
            </p>
            <p className="text-white pr-4">Privacy . Terms . Sitemap</p>
          </div>
        </div>
      </footer>

      {!isLoggedIn && <SignUp
        show={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onSwitchToLogin={openLoginModal}
      />}
      {!isLoggedIn && <Login
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignUp={openSignUpModal}
      />}
    </>
  );
}

export default Footer;