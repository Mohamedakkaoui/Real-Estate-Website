import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Image from "../../assets/bg-login.jpg";
import { RegisterUser } from "../../api/Authapi";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

function SignUp({ show, onClose, onSwitchToLogin }) {


  const [VerificationMessage, setVerificationMessage] = useState("")

  const schema = z.object({
    Email: z.string().email("Invalid Email adress"),
    Password: z
      .string()
      .min(8, "Password is too short")
      .max(20, "Password is too long"),
    Username: z.string().min(6, "Username must be at least 6 charcaters"),
    ConfirmPassword: z
      .string()
      .min(8, "Password is too short")
      .max(20, "Password is too long"),
  });

  const checkConfirmedPassword = (data: FormFields) => {
    if (data.Password !== data.ConfirmPassword) {
      setError("ConfirmPassword", {
        message: "Passwords do not match",
      });
      return false;
    }
    return true;
  };

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const OnRegister: SubmitHandler<FormFields> = async (data) => {
    try {
      if (!checkConfirmedPassword(data)) {
        return;
      }
      const res= await RegisterUser(data);
      setVerificationMessage(res.data.Message)
      onSwitchToLogin();
    } catch (error) {
      console.log(error.response.data.Message);
      
      if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        setError("root", {
          message: error.response.data.Message,
        });
      } else {
        setError("root", {
          message: "Error occurred While Logging in",
        });
      }
    }
  };

  const handleSignup = (data: any) => {
    handleSubmit(OnRegister)(data);
  };

  return (
    <>
      <Modal show={show} size="4xl" popup onClose={onClose}>
        <div className="grid  grid-cols-5 ">
          <div className="bg-full bg-center  relative col-span-2">
            <img
              src={Image}
              alt="Background"
              className="absolute inset-0 w-full h-full rounded-l-lg"
            />
          </div>

          <div className="h-cover pt-3 col-span-3 px-[10px]">
            <Modal.Body>
              <Modal.Header />
              <form onSubmit={handleSignup}>
                <div className="flex space-x-3 items-center ">
                  <div className="space-y-4 flex-auto w-60 pt-2">
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white pb-2 text-center">
                      Sign up
                    </h3>
                    {errors.root && (
                      <div className="bg-red-500 flex justify-center items-center py-2 rounded-md mt-3">
                        <span className="text-white  justify-center">
                          {errors.root.message}
                        </span>
                        <span className="bg-green-500 flex justify-center items-center py-2 rounded-md mt-3" >{VerificationMessage}</span>
                      </div>
                    )}
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Username"
                          value="User name"
                          className="font-semibold text-sm"
                        />
                      </div>
                      <TextInput
                        id="username"
                        {...register("Username")}
                        name="Username"
                        placeholder="User name"
                        required
                      />
                      {errors.Username && (
                        <span className="text-red-500">
                          {errors.Username.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Email"
                          value="Email"
                          className="font-semibold text-sm"
                        />
                      </div>
                      <TextInput
                        id="Email"
                        placeholder="Email"
                        {...register("Email")}
                        required
                      />
                    </div>
                    {errors.Email && (
                      <span className="text-red-500">
                        {errors.Email.message}
                      </span>
                    )}
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Password"
                          value="Password"
                          className="font-semibold text-sm"
                        />
                      </div>
                      <TextInput
                        id="Password"
                        type="password"
                        {...register("Password")}
                        placeholder="Your Password"
                        required
                      />
                      {errors.Password && (
                        <span className="text-red-500">
                          {errors.Password.message}
                        </span>
                      )}
                    </div>
                    <div className="pb-[10px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Password"
                          value="Confirm password"
                          className="font-semibold text-sm"
                        />
                      </div>
                      <TextInput
                        id="Password"
                        type="password"
                        {...register("ConfirmPassword")}
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                    {errors.ConfirmPassword && (
                      <span className="text-red-500">
                        {errors.ConfirmPassword.message}
                      </span>
                    )}
                    <div className="w-full">
                      <button
                        className="middle  none center w-full rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        type="submit"
                        onSubmit={handleSignup}
                      >
                        {isSubmitting ? "Submitting..." : "Register"}
                      </button>
                    </div>
                    <div className="justify-between text-center text-sm font-medium text-gray-500 dark:text-gray-300">
                      Already have an account?{" "}
                      <span
                        onClick={onSwitchToLogin}
                        className="font-bold text-[#FFA920] cursor-pointer hover:underline"
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignUp;
