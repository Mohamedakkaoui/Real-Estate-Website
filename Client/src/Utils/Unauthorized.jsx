import React from 'react';
import { useNavigate } from 'react-router-dom';
import UnauthorizedImg from '../assets/401.jpg';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/Home');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={UnauthorizedImg} alt="Unauthorized Access" className="mb-8 w-96 h-auto" />
      <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
      <p className="mt-4 text-xl">You do not have permission to view this page.</p>
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
