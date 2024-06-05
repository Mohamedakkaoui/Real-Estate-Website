import React, { useEffect, useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { fetchProfile } from "../../Api/Authapi";
import { UpdateUser, UploadUserPic } from "../../Api/UserApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import IconnuImg from "../../assets/Iconnu.jpeg";
import { toast } from "sonner";
import Loading from "../Common/Loading";
import { RectangleEllipsis, Phone } from "lucide-react";
import { UpdatePassword } from "../../Api/UserApi";

async function fetchProfileData() {
  try {
    const response = await fetchProfile();
    const profile = response.data;
    return profile;
  } catch (error) {
    console.log("Error fetching user reviews:", error);
  }
}

function PersonalInfos() {
  const [successMessage, setSuccessMessage] = useState("");
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Username: "",
  });

  const schema = z.object({
    FirstName: z
      .string()
      .min(3, "FirstName is short")
      .max(15, "FirstName is too long").optional(),
    LastName: z
      .string()
      .min(3, "FirstName is short")
      .max(15, "FirstName is too long").optional(),
    Email: z.string().email("Invalid Email adress").optional(),
    PhoneNumber: z.string().regex(/^\d+$/, "Invalid phone number").optional(),
    Username: z
      .string()
      .min(3, "FirstName is short")
      .max(15, "FirstName is too long").optional(),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues : userData
  });

  const onUpdate: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await UpdateUser(data);
      setTimeout(() => {
        setSuccessMessage(res.data.Message);
      }, 5000);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        setTimeout(() => {
          setError("root", {
            message: error.response.data.Message,
          });
        }, 4000);
      } else {
        setTimeout(() => {
          setError("root", {
            message: "Error occurred While Logging in",
          });
        }, 4000);
      }
    }
  };

  useEffect(() => {
    async function userData() {
      try {
        const profile = await fetchProfileData();
        setUserData(profile);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    }
    userData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="flex flex-col gap-1 items-start justify-center bg-white p-8 mt-8 mb-8 rounded-lg shadow w-full"
      onSubmit={handleSubmit(onUpdate)}
    >
      <div className="w-full border-b-2 pb-4">
        {" "}
        <h3 className="font-semibold text-xl">Personal informations</h3>
      </div>
      <label htmlFor="nom" className=" font-MyBook block mt-4 text-base">
        FirstName :
      </label>
      <div className="relative mt-1 w-full">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="FirstName"
            {...register("FirstName")}
            value={userData.FirstName || ""}
            onChange={handleChange}
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="FirstName"
          />
        </div>
        {errors.FirstName && (
          <p className="text-red-500">{errors.FirstName.message}</p>
        )}
      </div>

      <label htmlFor="prenom" className="text-base font-MyBook block mt-4">
        LastName :
      </label>
      <div className="relative mt-1 w-full">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="LastName"
            {...register("LastName")}
            value={userData.LastName || ""}
            onChange={handleChange}
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="LastName"
          />
        </div>
        {errors.LastName && (
          <p className="text-red-500">{errors.LastName.message}</p>
        )}
      </div>
      <label htmlFor="prenom" className="text-base font-MyBook block mt-4">
        Username :
      </label>
      <div className="relative mt-1 w-full">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="prenom"
            {...register("Username")}
            value={userData.Username || ""}
            onChange={handleChange}
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {errors.Username && (
          <p className="text-red-500">{errors.Username.message}</p>
        )}
      </div>
      <label htmlFor="email" className="text-base font-MyBook block mt-4">
        Email :
      </label>
      <div className="relative mt-1 w-full">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            {...register("Email")}
            value={userData.Email || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
      </div>
      <label htmlFor="tel" className="text-base font-MyBook block mt-4">
        PhoneNumber :
      </label>
      <div className="relative mt-1 w-full">
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Phone className="text-gray-500 size-5 text-xl font-thin dark:text-gray-400" />
        </span>
        <input
          type="tel"
          id="PhoneNumber"
          {...register("PhoneNumber")}
          value={userData.PhoneNumber || ""}
          onChange={handleChange}
          className=" rounded-none rounded-e-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        </div>
      </div>
      {errors.PhoneNumber && (
        <p className="text-red-500">{errors.PhoneNumber.message}</p>
      )}
      {successMessage && (
        <div className="text-green-600 mt-4">{successMessage}</div>
      )}
      <button
        type="submit"
        className="center w-[40%] mt-8 rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Update
      </button>
    </form>
  );
}

export default PersonalInfos;

function ProfilePic() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      setSelectedImage(e.target.result);
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    const PicData = new FormData();
    PicData.append("profilePic", selectedImage);
    try {
      setUploading(true);
      const response = await UploadUserPic(PicData);
      setUploading(false);
      setUploadSuccess(true);
      console.log("Image uploaded successfully:", response.data);
      toast.success("Image uploaded successfully");
    } catch (error) {
      setUploading(false);
      setUploadSuccess(false);
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    async function getUserProfile() {
      try {
        const profile = await fetchProfileData();
        setImageUrl(profile.ProfilePic);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    }
    getUserProfile();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 mt-8 rounded-lg shadow w-96">
      <div className="relative w-32 h-32 rounded-full mx-auto  bg-white">
        <img
          src={imageUrl || IconnuImg}
          alt="Profile picture"
          className="w-full h-full  rounded-full   box-content"
        />
      </div>
      <div className="text-center ">
        <h3 className="text-xl font-MyMedium mt-10 text-gray-800">
          Your Profile Picture
        </h3>
        <p className="text-gray-600 mt-5 font-MyLight">
          Picture will be shown on your profile
        </p>
      </div>
      <div className="flex justify-around mt-6 w-full">
        <label
          htmlFor="imageInput"
          className="  text-black border border-black  bg-[#fafafa] hover:bg-red font-MyBook
                py-2 px-4 rounded-md focus:outline-none  cursor-pointer"
        >
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden "
            onChange={handleImageChange}
          />
          Choose
        </label>
        <button
          className="center w-[35%] rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? <Loading /> : "Save"}
        </button>
      </div>
      {uploadSuccess === true && (
        <p className="text-green-500 mt-4">Image uploaded successfully!</p>
      )}
      {uploadSuccess === false && (
        <p className="text-red-500 mt-4">
          Error uploading image. Please try again.
        </p>
      )}
    </div>
  );
}

function AddBio() {
  const [VerificationMessage, SetVerificationMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

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

  const onUpdatePassowrd: SubmitHandler<FormFields> = async (data) => {
    try {
      if (!checkConfirmedPassword(data)) {
        return;
      }
      const res = await UpdatePassword(data);
      if (res.status == 202) {
        SetVerificationMessage(res.data.Message);

        setTimeout(() => {
          SetVerificationMessage("");
        }, 5000);
      }
    } catch (error) {
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
          message: "Error Updating the Password",
        });
      }
    }
  };

  const handleUpdate = (data: any) => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    handleSubmit(onUpdatePassowrd)(data);
  };

  return (
    <form onSubmit={handleUpdate}>
      <div className="flex flex-col items-start justify-center bg-white p-6 mt-4 mb-4 rounded-lg shadow w-96">
        <div className="border-b-2 pb-3 w-full">
          <h2 className="font-semibold text-lg">Change Password</h2>
        </div>
        <div className=" flex justify-center items-center py-2 rounded-md ">
          {errors.root && (
            <span className="text-red-500 justify-center">
              {errors.root.message}
            </span>
          )}
          {VerificationMessage && (
            <span className="text-green-400 flex justify-center px-2 items-center py-2 rounded-md">
              {VerificationMessage}
            </span>
          )}
        </div>

        <div className="w-full mt-1">
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2  text-md font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <RectangleEllipsis className="w-5 h-5 text-gray-500 dark:text-gray-400 " />
              </div>
              <input
                type="password"
                id="Password"
                {...register("Password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Password"
              ></input>
              {errors.Password && (
                <span className="text-red-500">{errors.Password.message}</span>
              )}
              <div>
                <label htmlFor="Password" className="font-semibold text-sm" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-md  font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <RectangleEllipsis className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="password"
                id="ConfirmPassword"
                {...register("ConfirmPassword")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confirm Password"
              ></input>
              {errors.ConfirmPassword && (
                <span className="text-red-500">
                  {errors.ConfirmPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <button
            className="middle  none center w-full rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            type="submit"
            onSubmit={handleUpdate}
          >
            Update Password
          </button>
        </div>
      </div>
    </form>
  );
}

export { PersonalInfos, ProfilePic, AddBio };
