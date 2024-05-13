import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo@2x.png";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import HoverMenuWithTransition from "../Common/DropDown/DropDown";
import { isAuth } from "../../Utils/IsAuth";
import { ContextAuth } from "../../Context/AuthContext";
import IconDropDown from "../Common/DropDown/IconDropDown";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = ContextAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  return (
    <>
      <div className="flex flex-wrap h-screen">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-white text-black w-screen shadow-lg">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading mr-12" href="#">
                <img className="h-9" src={Logo} alt="logo"></img>
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-9">
                <HoverMenuWithTransition />
                <li className="mt-2">
                  <a className="hover:text-[#FFA920]" href="#">
                    Home
                  </a>
                </li>
                <li className="mt-2">
                  <a className="hover:text-[#FFA920]" href="#">
                    Catagory
                  </a>
                </li>
                <li className="mt-2">
                  <a className="hover:text-[#FFA920]" href="#">
                    Property
                  </a>
                </li>
                <li className="mt-2">
                  <a className="hover:text-[#FFA920]" href="#">
                    Page
                  </a>
                </li>
                <li className="mt-2">
                  <a className="hover:text-[#FFA920]" href="#">
                    Blog
                  </a>
                </li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex  space-x-5 items-center">
                <div
                  className="order-2   sm:hidden md:flex  md:items-center md:w-auto items-center justify-end mr-0 "
                  id="nav-content"
                >
                  {/* switch to a navbar when user is logged in  */}
                  {!isLoggedIn && (
                    <div className="auth flex items-center w-full">
                      <svg
                        className="mr-1"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62501 18.5744H2.70418C2.65555 18.5744 2.60892 18.5551 2.57454 18.5207C2.54016 18.4863 2.52084 18.4397 2.52084 18.3911V17.0619C2.52084 16.3002 3.06443 15.6292 3.90226 15.059C5.39826 14.0378 7.81918 13.3943 10.5417 13.3943C10.9908 13.3943 11.4318 13.4127 11.8626 13.4466C11.9537 13.4558 12.0457 13.4466 12.1332 13.4198C12.2207 13.3929 12.3019 13.3489 12.3722 13.2902C12.4424 13.2315 12.5003 13.1594 12.5423 13.0781C12.5843 12.9968 12.6097 12.9079 12.6169 12.8166C12.6241 12.7254 12.613 12.6336 12.5842 12.5467C12.5555 12.4598 12.5097 12.3795 12.4495 12.3105C12.3893 12.2416 12.316 12.1853 12.2338 12.1451C12.1516 12.1048 12.0621 12.0814 11.9708 12.0762C11.4954 12.038 11.0186 12.0191 10.5417 12.0193C7.49651 12.0193 4.80059 12.7811 3.12676 13.9223C1.84984 14.7932 1.14584 15.8996 1.14584 17.061V18.3911C1.14609 18.8042 1.31037 19.2003 1.60259 19.4924C1.89481 19.7844 2.29104 19.9485 2.70418 19.9485L9.62501 19.9494C9.80735 19.9494 9.98221 19.877 10.1111 19.748C10.2401 19.6191 10.3125 19.4443 10.3125 19.2619C10.3125 19.0796 10.2401 18.9047 10.1111 18.7758C9.98221 18.6468 9.80735 18.5744 9.62501 18.5744ZM10.5417 1.14583C7.75868 1.14583 5.50001 3.4045 5.50001 6.1875C5.50001 8.9705 7.75868 11.2292 10.5417 11.2292C13.3247 11.2292 15.5833 8.9705 15.5833 6.1875C15.5833 3.4045 13.3247 1.14583 10.5417 1.14583ZM10.5417 2.52083C12.5657 2.52083 14.2083 4.1635 14.2083 6.1875C14.2083 8.2115 12.5657 9.85416 10.5417 9.85416C8.51768 9.85416 6.87501 8.2115 6.87501 6.1875C6.87501 4.1635 8.51768 2.52083 10.5417 2.52083Z"
                          fill="#1C1C1E"
                        ></path>
                        <path
                          d="M16.6393 18.524C17.2592 18.618 17.8928 18.5515 18.4796 18.3311C19.0665 18.1106 19.5871 17.7434 19.9918 17.2646C20.3965 16.7858 20.6717 16.2112 20.7913 15.5958C20.9109 14.9804 20.8707 14.3446 20.6748 13.7491C20.4788 13.1536 20.1335 12.6182 19.6719 12.194C19.2102 11.7698 18.6476 11.471 18.0377 11.326C17.4277 11.1811 16.7908 11.1948 16.1877 11.3659C15.5846 11.537 15.0353 11.8598 14.5924 12.3035C14.186 12.7095 13.8807 13.2053 13.7013 13.751C13.5218 14.2967 13.4732 14.877 13.5593 15.4449L11.4308 17.5725C11.3669 17.6364 11.3161 17.7123 11.2815 17.7958C11.2469 17.8793 11.2291 17.9688 11.2292 18.0593V20.1667C11.2292 20.5462 11.5372 20.8542 11.9167 20.8542H14.0241C14.1145 20.8542 14.204 20.8364 14.2875 20.8018C14.3711 20.7672 14.4469 20.7165 14.5108 20.6525L16.6393 18.524ZM16.5917 17.1123C16.4753 17.0813 16.3528 17.0814 16.2365 17.1127C16.1202 17.1439 16.0141 17.2051 15.9289 17.2902L13.7399 19.4792H12.6042V18.3434L14.7932 16.1544C14.8782 16.0692 14.9395 15.9631 14.9707 15.8468C15.0019 15.7305 15.002 15.608 14.971 15.4917C14.8415 15.0042 14.8762 14.4878 15.0697 14.022C15.2632 13.5563 15.6046 13.1672 16.0413 12.915C16.478 12.6627 16.9857 12.5613 17.4858 12.6264C17.9859 12.6915 18.4506 12.9195 18.8082 13.2752C19.1638 13.6327 19.3918 14.0975 19.4569 14.5976C19.522 15.0977 19.4206 15.6053 19.1684 16.042C18.9161 16.4787 18.5271 16.8202 18.0613 17.0136C17.5956 17.2071 17.0791 17.2418 16.5917 17.1123Z"
                          fill="#FFA920"
                        ></path>
                        <path
                          d="M16.4835 15.5998C16.3877 15.5083 16.3111 15.3984 16.2583 15.2768C16.2055 15.1552 16.1775 15.0243 16.1761 14.8917C16.1746 14.7592 16.1996 14.6276 16.2497 14.5049C16.2998 14.3822 16.374 14.2707 16.4678 14.177C16.5616 14.0833 16.6732 14.0093 16.796 13.9594C16.9188 13.9095 17.0503 13.8846 17.1829 13.8862C17.3154 13.8879 17.4463 13.916 17.5679 13.9689C17.6894 14.0219 17.7991 14.0986 17.8906 14.1946C18.0698 14.3826 18.1683 14.6333 18.1651 14.893C18.1619 15.1527 18.0572 15.4009 17.8734 15.5845C17.6896 15.768 17.4413 15.8724 17.1816 15.8752C16.9219 15.8781 16.6713 15.7793 16.4835 15.5998Z"
                          fill="#FFA920"
                        ></path>
                      </svg>
                      <p className="bg-transparent text-gray-800   font-semibold  ">
                        <span
                          onClick={openSignUpModal}
                          className="hover:text-[#FFA920] cursor-pointer "
                        >
                          Register{" "}
                        </span>
                        /
                        <span
                          onClick={openLoginModal}
                          className="hover:text-[#FFA920] cursor-pointer"
                        >
                          {" "}
                          Login
                        </span>
                      </p>
                    </div>
                  )}
                  {isLoggedIn && <IconDropDown />}
                  <div className="flex items-center ml-4 bg-[#FFA920] rounded-md p-1">
                    <Button
                      style={{ textTransform: "none" }}
                      className="flex items-center w-40 px-6"
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          fill="none"
                          className="mr-2"
                        >
                          <path
                            fill="#fff"
                            d="M13.25 15.75V15h-1.875c-.62 0-1.125-.505-1.125-1.125v-1.5c0-.62.505-1.125 1.125-1.125h.375v-.75h1.5v.75H14a.75.75 0 1 1 0 1.5h-2.25v.75h1.875c.62 0 1.125.505 1.125 1.125v1.5c0 .62-.505 1.125-1.125 1.125h-.375V18h-1.5v-.75H11a.75.75 0 1 1 0-1.5h2.25Z"
                          />
                          <path
                            fill="#fff"
                            d="m22.469 10.645-8.154-7.676a2.651 2.651 0 0 0-3.63 0L8.75 4.791V3A.75.75 0 0 0 8 2.25H5a.75.75 0 0 0-.75.75v6.027l-1.697 1.598a1.624 1.624 0 0 0-.445 1.814c.24.645.83 1.061 1.501 1.061h.641V21a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-7.5h.639a1.6 1.6 0 0 0 1.503-1.062c.244-.655.069-1.367-.423-1.793ZM5.75 3.75h1.5v2.452l-1.5 1.413V3.75Zm15.736 8.164c-.032.086-.081.086-.097.086H20a.75.75 0 0 0-.75.75v7.5H5.75v-7.5A.75.75 0 0 0 5 12H3.61c-.016 0-.065 0-.097-.086a.152.152 0 0 1 .045-.176l8.155-7.676a1.15 1.15 0 0 1 1.574 0l8.175 7.696c.057.048.036.125.024.156Z"
                          />
                        </svg>
                        <div className="text-white font-semibold border-l  pl-2">
                          Sell Property
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="lg:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

      <Login
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignUp={openSignUpModal}
      />
      <SignUp
        show={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onSwitchToLogin={openLoginModal}
      />
    </>
  );
}

export default NavBar;
