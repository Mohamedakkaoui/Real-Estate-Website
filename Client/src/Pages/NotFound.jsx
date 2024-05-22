import React from 'react'
import NotFoundImg from "../assets/404.png"
function NotFound() {

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex justify-center flex-col min-h-screen text-center ">
      <img src={NotFoundImg} alt="" className="w-[500px] mx-auto" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
      <button
        className="gap-2 mt-8 btn btn-primary rounded-md text-white flex-center-center"
        onClick={handleGoBack}
      >
        <span className='bg-[#FFA920] px-5 py-2 rounded-md hover:cursor-pointer'>go back</span>
      </button>
    </div>
  )
}

export default NotFound