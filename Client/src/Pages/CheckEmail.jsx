import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, CircleX } from "lucide-react";
import { VerifyEmail } from "../Api/Authapi";
import { Card } from "flowbite-react";

const EmailVerificationPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const Navigate = useNavigate();

  const [verificationStatus, setVerificationStatus] = useState(null);
  const [VerificationMessage, setVerificationMessage] = useState(null)


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await VerifyEmail(email, token);
        console.log(response.status === 200);
        if (response.status === 200) {
          setVerificationStatus("success");
          setVerificationMessage(response.data.Message)
        } else {
          setVerificationStatus('error');
          setVerificationMessage(response.data.Message)
        }
      } catch (error) {
        console.error("Error occurred during email verification:", error.response.data.Message)
        setVerificationStatus('error')
        setVerificationMessage(error.response.data.Message)
      }
    }
    verifyEmail()
  }, [token, email]);

  const handleCheck = () => {
    Navigate('/Home')
  };

  return (
    <div>
      <div>
        {verificationStatus === "success" && (
          <Card className="max-w-sm m-auto mt-[200px]">
            <div>
              <CheckCircle
                size="123"
                color="green"
                className="flex justify-center ml-[100px] mb-[30px]"
              />
            </div>
            <h5 className="text-2xl flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">
              Thank You
            </h5>
            <h1 className="flex justify-center">{VerificationMessage}</h1>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleCheck}
            >
              Continue
            </button>
          </Card>
        )}
      </div>
      <div>
        {verificationStatus === "error" && (
          <Card className="max-w-sm m-auto mt-[200px] mb-[30px]">
            <div>
              <CircleX
                size="123"
                color="red"
                className="flex justify-center ml-[100px] mb-[30px]"
              />
            </div>
            <h5 className="text-2xl flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">
              Oops
            </h5>
            <h1 className="flex justify-center">
              {VerificationMessage}
            </h1>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleCheck}
            >
              Try again Later
            </button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
