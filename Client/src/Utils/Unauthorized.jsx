import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const Navigate = useNavigate();

  const handleGoHome = () => {
    Navigate('/Home');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
      <p className="mt-4 text-xl">You do not have permission to view this page.</p>
      <p className="mt-4 text-2xl font-bold ">Please log in</p>
      <p className="mt-4 text-2xl font-bold ">or</p>
      <button
        onClick={handleGoHome}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Unauthorized;
