import React from "react";
import "./Main.css";
import { UserCheck } from "lucide-react";
import UserCards from "../UserCards";
import { ContextAuth } from "../../Context/AuthContext";
import TableDash from "../Common/Table/Table";
import RatingCard from "./RatingCard";
function MainDashboard() {
  const { UserProfile } = ContextAuth();

  return (
    <>
      <div className="firsttag mb-9 mt-6">
        <h3>Howdy, {UserProfile.Username}</h3>
        <p>We are glad to see you again!</p>
      </div>
      <UserCards />
      <div className="flex  w-full m-auto gap-6 mt-9">
        <div className=" w-[60%]">
          <TableDash />
        </div>
        <div className="w-[40%]">
          <RatingCard/>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
