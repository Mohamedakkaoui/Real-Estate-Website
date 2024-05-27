import React, { useState } from "react";
import BgLogin  from "../assets/bg-login.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UpdatePassword } from "../Api/Authapi";
import { MoveLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

function UpdatePssword() {


  const Navigate = useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const [VerificationMessage, setVerificationMessage] = useState({
    message: "",
    color: ""
  });

  //schema for Passwords
  const schema = z.object({
    Password: z
      .string()
      .min(8, "Password is too short")
      .max(20, "Password is too long"),
    ConfirmPassword: z
      .string()
      .min(8, "Password is too short")
      .max(20, "Password is too long"),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });


  //checking if passwords match or not
  const checkConfirmedPassword = (data : FormFields) => {
    if(data.Password !== data.ConfirmPassword) {
      setError("ConfirmPassword", {
        message : "Passwords do not match",
      })
      return false
    }
    return true
  }



  const OnUpdatePassword: SubmitHandler<FormFields> = async (data) => {
    try {

      if(!checkConfirmedPassword(data)) {
        return;
      }
      const res = await ( UpdatePassword(id, token ,data)) as { status: number; data: any };
      if (res.status === 202) {
        setVerificationMessage({message: res.data.Message, color: 'text-green-200'});
      } else {
        setVerificationMessage({message: res.data.Error, color: 'text-red-200'});
      }
    } catch (error) {
      console.error(
        "Error occurred during email verification:",
        error
      );
      setVerificationMessage({message: error.response.data.Error, color: 'red'});
    }
  };

  const handleResetPassword = (data: any) => {
    handleSubmit(OnUpdatePassword)(data)
  };
  
  
  const handleCloseTab = () => {
    window.close();
  };

  const handleLogin = () => {
    Navigate("/Home")
    handleCloseTab()
  }
  

  return (
    <>
      <div className="min-h-screen h-screen bg-gray-100 overflow-x-hidden   flex justify-center items-center ">
        <div className="absolute w-60 h-60 rounded-xl bg-[#FFA920] top-6  left-[-100px] z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-[#FFA920] right-[40px] bottom-6 z-0 transform rotate-12 hidden md:block"></div>
        <div className="flex  h-[600px] z-10">
          <div className="bg-cover  w-[400px] shadow-2xl h-[600px] w relative">
            <img src={BgLogin} alt="" className="w-full h-full rounded-l-lg" />
          </div>
          <form
            onSubmit={handleResetPassword}
            className="py-12 px-12 bg-white rounded-r-2xl shadow-xl z-20 pt-[150px]"
          >
            <div className="">
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Set new Password
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                Must be at least 8 charcaters.
              </p>
            </div>
            <div className={`${VerificationMessage.color} flex justify-center font-bold mt-3`}>{VerificationMessage.message}</div>
            <div className="space-y-1 ">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("Password")}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-white"
              />
            </div>
            {errors.Password && (
              <span className="text-red-500 ">{errors.Password.message}</span>
            )}
            <div className="space-y-1 mt-5">
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input
                type="password"
                {...register("ConfirmPassword")}
                placeholder="Confirm Password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-white"
              />
            </div>
            {errors.ConfirmPassword && (
              <span className="text-red-500 ">
                {errors.ConfirmPassword.message}
              </span>
            )}
            <div className="text-center mt-6">
              <button
                type="submit"
                onSubmit={handleResetPassword}
                className="w-full py-2 text-md text-white bg-[#FFA920]  rounded-lg hover:bg-gradiant-br from-amber-200 via-yellow-200 to-yellow-500 transition-all"
              >
                {isSubmitting ? "Loading..." : "Reset Password"}
              </button>
              
              <p className="flex justify-center items-center mt-4 text-sm">
                <div className="mr-2">
                  <MoveLeft />
                </div>
                Back to login{" "}
                <span onClick={handleLogin} className="underline  cursor-pointer hover:text-[#FFA920] ml-3">
                  {" "}
                  Log In
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="w-40 h-40 absolute bg-[#FFA920] rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-[#FFA920]  rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
}

export default UpdatePssword;
