import React, { useEffect, useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { fetchProfile } from "../../Api/Authapi";
import { UploadUserPic } from "../../Api/UserApi";
import axios from "axios";


async function fetchProfileData() {
    try {
        const response = await fetchProfile();
        const profile = response.data;
        return profile
    } catch (error) {
        console.log('Error fetching user reviews:', error);
    }
}

function PersonalInfos() {
    const [successMessage, setSuccessMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false); // Track if form has been successfully submitted
    const [userData, setUserData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        phoneNumber: "",
        password: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // data fetching
        async function userData() {
            try {
                const profile = await fetchProfileData();
                setUserData(profile);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        }
        userData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ok');
        // Handle form submission logic here
        setFormSubmitted(true);
        setSuccessMessage("Information updated successfully!");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Data not available.</div>;
    }

    return (
        <form
            className="flex flex-col gap-1 items-start justify-center bg-white p-8 mt-8 mb-8 rounded-lg shadow w-full"
            onSubmit={handleSubmit}
        >
            <h3 className="font-MyMedium">Information Personels</h3>
            <label htmlFor="nom" className=" font-MyBook block mt-4 text-base">
                First Name:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PiUserCircleLight className="text-black text-2xl font-thin" />
                </span>
                <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={userData.FirstName || ""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>

            <label htmlFor="prenom" className="text-base font-MyBook block mt-4">
                Last Name:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PiUserCircleLight className="text-black text-2xl font-thin" />
                </span>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={userData.LastName || ""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>
            <label htmlFor="prenom" className="text-base font-MyBook block mt-4">
                Username:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PiUserCircleLight className="text-black text-2xl font-thin" />
                </span>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={userData.Username || ""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>
            <label htmlFor="email" className="text-base font-MyBook block mt-4">
                Email:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <AiOutlineMail className="text-black text-2xl font-thin" />
                </span>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.Email || ""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>

            <label htmlFor="tel" className="text-base font-MyBook block mt-4">
                Phone Number:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <CiPhone className="text-black text-2xl font-thin" />
                </span>
                <input
                    type="tel"
                    id="tel"
                    name="tel"
                    value={userData.PhoneNumber || ""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>

            <label htmlFor="password" className="text-base font-MyBook block mt-4">
                New Password:
            </label>
            <div className="relative mt-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <RiLockPasswordLine className="text-black text-xl font-thin" />
                </span>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={""}
                    onChange={handleChange}
                    className="pl-12 pr-2 py-2 border border-gray-300 bg-[#fafafa] rounded-md w-full"
                />
            </div>

            {formSubmitted && <div className="text-green-600">{successMessage}</div>}

            <button
                type="submit"
                className="mt-4 w-full py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-200"
            >
                Update
            </button>
        </form>
    );
}

export default PersonalInfos;


function ProfilePic() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); // Initial image URL
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(null);



    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result); // Set image preview URL
            setImageUrl(e.target.result); // Update image URL for display
        };

        reader.readAsDataURL(file);
    };

    const handleUpload = async () => {
        if (!selectedImage) return;
        const PicData = new FormData();
        PicData.append('profilePic', selectedImage)
        console.log(PicData);
        try {
            setUploading(true)
            const response = await UploadUserPic(PicData);

            setUploading(false);
            setUploadSuccess(true);
            console.log('Image uploaded successfully:', response.data);
        } catch (error) {
            setUploading(false);
            setUploadSuccess(false);
            console.error('Error uploading image:', error);
        }
    }



    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 mt-8 rounded-lg shadow w-96">

            <div className="relative w-32 h-32 rounded-full mx-auto  bg-white">
                {imageUrl && (
                    <img src={imageUrl} alt="Profile picture"
                        className="w-full h-full  rounded-full   box-content" />
                )}
                {!imageUrl && (
                    <label htmlFor="profileImage" className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 opacity-75 hover:opacity-100 rounded-full cursor-pointer">
                        {/* <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        /> */}
                        <span className="button-text">Upload</span>
                    </label>
                )}
            </div>

            <div className="text-center ">
                <h3 className="text-xl font-MyMedium mt-10 text-gray-800">Your Profile Picture</h3>
                <p className="text-gray-600 mt-5 font-MyLight">Picture will be shown on your profile</p>
            </div>
            <div className="flex justify-around mt-6 w-full">

                <label htmlFor="imageInput"
                    className="  text-black border border-black  bg-[#fafafa] hover:bg-red font-MyBook
                py-2 px-4 rounded-md focus:outline-none  cursor-pointer">
                    <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        className="hidden "
                        onChange={handleImageChange}
                    />
                    Choose
                </label>
                <button className="bg-[#023C88] hover:bg-blue-600  text-white font-MyBook  py-2 px-4 rounded-md focus:outline-none"
                    onClick={handleUpload}
                    disabled={uploading}
                >
                    Save
                </button>
            </div>
        </div >
    );
}


function AddBio() {
    return (
        <div className="flex flex-col items-start justify-center bg-white p-6 mt-8  rounded-lg shadow w-96">
            <h2 className="font-MyMedium mb-2">Bio</h2>
            <textarea
                id="aboutMe"
                className="w-full min-h-[200px] bg-[#fafafa] border border-gray-200 rounded-md p-2 resize-none outline-none"

            />
        </div>
    );
};

export { PersonalInfos, ProfilePic, AddBio };
