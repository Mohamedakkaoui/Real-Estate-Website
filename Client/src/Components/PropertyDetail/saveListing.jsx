import React, { useState, useEffect } from "react";
import { DeleteSaved, saveListing } from "../../Api/ListingsApi";
import { ContextAuth } from "../../Context/AuthContext";
import { FaHeart } from "react-icons/fa6";
import { Toaster, toast } from "sonner";

const SaveListingComponent = ({ id, onSave }) => {
  const { UserProfile } = ContextAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const checkSavedStatus = () => {
      if (
        UserProfile &&
        UserProfile.watchList &&
        UserProfile.watchList.includes(id)
      ) {
        setIsSaved(true);
      }
    };
    checkSavedStatus();
  }, [UserProfile, id]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (isSaved) {
        const response = await DeleteSaved(id);
        if (response.status == 200) {
          toast.success(response.data.Message, {
            style: { backgroundColor: "#76C776", color: "white" },
          })
          setIsSaved(false);
        } else {
          toast.error("Error occured while unsaving Property", {
            style: { backgroundColor: "#FF7F7F", color: "white" },
          })
          console.log(response)
        }     
      } else {
        const response = await saveListing(id);
        console.log(response)
        if (response.message == "Listing saved successfully") {
          toast.success(response.message, {
            style: { backgroundColor: "#76C776", color: "white" },
          })
          setIsSaved(true);
        } else {
          toast.error("Error occured while saving Property", {
            style: { backgroundColor: "#FF7F7F", color: "white" },
          })
        }
      }
      if (onSave) {
        onSave();
      }
    } catch (error) {
      console.error("Error saving listing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={handleSave}
        className={`flex gap-2 border rounded-lg px-2 pt-2 ${
          isSaved ? "text-red-600" : "text-grey-600"
        } hover:cursor-pointer`}
      >
        <span>{isSaved ? "Saved" : "Save"}</span>
        <FaHeart className="size-5 w-6" />
        {isLoading && <span>Loading...</span>}
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default SaveListingComponent;
