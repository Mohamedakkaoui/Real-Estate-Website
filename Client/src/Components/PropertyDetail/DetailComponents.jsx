import React from "react";
import BookAndSale from "./DetailComponents/Book&Sale";
import UserInfo from "./DetailComponents/UserInfo";
import Overiew from "./DetailComponents/Overiew";
import Description from "./DetailComponents/Description";
import Featured from "./DetailComponents/Featured";
import DetailMap from "./DetailComponents/DetailMap";
import Reviews from "./DetailComponents/Reviews";
import PostReview from "./DetailComponents/PostReview";

function DetailComponents() {
  return (
    <div className="flex  w-[80%] m-auto gap-6">
      <div className=" w-[60%]">
        <Overiew />
        <Description />
        <Featured />
        <DetailMap />
        <Reviews />
        <PostReview />
      </div>
      <div className="w-[40%] sticky -top-0">
        <BookAndSale />
        <UserInfo />
      </div>
    </div>
  );
}

export default DetailComponents;
