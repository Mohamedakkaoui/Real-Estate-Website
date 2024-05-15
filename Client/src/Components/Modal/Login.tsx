import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Image from "../../assets/bg-login.jpg";
import { LoginUser } from "../../Api/Authapi";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { ContextAuth } from "../../Context/AuthContext";


function Login({ show, onClose, onSwitchToSignUp }) {

  const [isVisible, setIsVisible] = useState(true);
  const [VerrificationMessage, setVerificationMessage] = useState({
    message : "",
    type : ""
  })
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const {  handleLogin } = ContextAuth()
  
  const schema = z.object({
    Email: z.string().email("Invalid Email adress"),
    Password: z
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

  const OnLogin: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await LoginUser(data)
      handleLogin(res)
      onClose() //can be added in the login logic
      setVerificationMessage({
        message : res.data.Message,
        type : "success"
      })//adde to loin logic 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.Message) {
        setError("root", {
          message: error.response.data.Message,
        });
      } else {
        setError("root", {
          message : "Error occurred While Logging in"
        })
      }
    }
  };
  
  const handleLoginSubmit = (data: any) => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    handleSubmit(OnLogin)(data);
  }

  useEffect(() => {
    if (!show && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [show]);
  
  return (
    <>
      <Modal show={show} size="5xl" popup onClose={onClose}>
        <div className="grid gap-2 grid-cols-2 ">
          <div className="bg-cover bg-center flex-auto  relative">
            <img
              src={Image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            />
          </div>

          <div className="h-[600px] pt-3">
            <Modal.Body>
              <Modal.Header />
              <form onSubmit={handleLoginSubmit}>
                <div className="flex space-x-6 items-center ">
                  {/* Form */}
                  <div className="space-y-6 flex-auto w-60 pt-9">
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white pb-5 text-center">
                      Login
                    </h3>
                    {isVisible && errors.root && (
                      <div className=" text-red-600 flex bg-red-200 justify-center items-center py-2 rounded-md mt-3">
                        <span className="justify-center">
                          {errors.root.message}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Email"
                          value="Email"
                          className="font-semibold text-base"
                        />
                      </div>
                      <TextInput
                        {...register("Email")}
                        id="email"
                        placeholder="Email or UserName"
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
                          className="font-semibold text-base"
                        />
                      </div>
                      <TextInput
                        id="password"
                        type="password"
                        {...register("Password")}
                        placeholder="Your Password"
                        required
                      />
                    </div>
                    {errors.Password && (
                      <span className="text-red-500">
                        {errors.Password.message}
                      </span>
                    )}
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                      </div>
                      <a
                        href="/users/auth/reset-password-email"
                        className="text-sm text-[#FFA920] hover:underline dark:text-cyan-500"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <div className="w-full">
                      <button
                        className="middle none center w-full rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        type="submit"
                        onSubmit={handleLoginSubmit}
                      >
                        {isSubmitting ? "Submitting..." : "Login"}
                      </button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?&nbsp;
                      <p
                        onClick={onSwitchToSignUp}
                        className="cursor-pointer text-[#FFA920] hover:underline dark:text-cyan-500 "
                      >
                        Create account
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </div>
        </div>
      </Modal>

      <button ref={closeButtonRef} style={{ visibility: "hidden" }} />

    </>
  );
}

export default Login;
