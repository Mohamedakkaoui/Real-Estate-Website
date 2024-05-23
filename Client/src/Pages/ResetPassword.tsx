import React, { useState } from "react";
import { Card } from "flowbite-react";
import { ResetPassword } from "../api/Authapi";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

function Reset_Password() {
  //usestate to get the messgae
  const [VerificationMessage, setVerificationMessage] = useState("");

  //useState to know te status of the response
  const [verificationStatus, setVerificationStatus] = useState("");

  const schema = z.object({
    Email: z.string().email("Invalid Email adress"),
  });

  const Navigate = useNavigate();

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const OnReset: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await ResetPassword(data);
      if (res.status === 200) {
        setVerificationStatus("success");
        setVerificationMessage(res.data.Message);
      } else {
        setVerificationStatus("error");
        setVerificationMessage(res.data.Message);
      }
    } catch (error) {
      console.error(
        "Error occurred during email verification:",
        error.response.data.Message
      );
      setVerificationStatus("error");
      setVerificationMessage(error.response.data.Message);
    }
  };

  const HandleSignIn = () => {
    Navigate("/Home");
  };

  const handleResetPassword = (data:any) => {
    handleSubmit(OnReset)(data)
  }

  return (
    <>
        <div className="min-h-screen bg-gray-100  flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-[#FFA920]  -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-[#FFA920] -bottom-6 -right-3 transform rotate-12 hidden md:block"></div>
          <form onSubmit={handleResetPassword} className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Reset Password
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                Enter your Email to reset your password
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                {...register("Email")}
                placeholder="Email Address"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-white"
              />
            </div>
            {errors.Email && (
            <span className="text-red-500">{errors.Email.message}</span>
          )}
            <div className="text-center mt-6">
              <button onSubmit={handleResetPassword} type="submit" className="w-full py-2 text-xl text-white bg-[#FFA920]  rounded-lg hover:bg-gradiant-br from-amber-200 via-yellow-200 to-yellow-500 transition-all">
                Request reset Link
              </button>
              <p className="mt-4 text-sm">
                Already Have An Account?{" "}
                <span
                  onClick={HandleSignIn}
                  className="underline  cursor-pointer hover:text-[#FFA920] "
                >
                  {" "}
                  Sign In
                </span>
              </p>
            </div>
          </form>
          <div className="w-40 h-40 absolute bg-[#FFA920] rounded-full top-0 right-12 hidden md:block"></div>
          <div className="w-20 h-40 absolute bg-[#FFA920]  rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
    </>
  );
}

export default Reset_Password;
