import React from "react";
import BookAndSale from "./DetailComponents/Book&Sale";
import UserInfo from "./DetailComponents/UserInfo";
import Overiew from "./DetailComponents/Overiew";
import Description from "./DetailComponents/Description";
import Featured from "./DetailComponents/Featured";
import DetailMap from "./DetailComponents/DetailMap";
import Reviews from "./DetailComponents/Reviews";
import PostReview from "./DetailComponents/PostReview";

function DetailComponents({ property, reviews }) {

  const { description, features, location, owner, price, latitude, longitude, listingType, Object_id, _id } = property || {};
  const coords = latitude && longitude ? [longitude, latitude] : null;
  return (
    <div className="flex  w-[80%] m-auto gap-6">
      <div className=" w-[60%]">
        <Overiew property={property} />
        <Description description={description} />
        <Featured features={features} />
        {coords && <DetailMap coords={coords} />}
        {listingType === 'vacation' && (
          <>
            {reviews && <Reviews reviews={reviews} />}

            <PostReview />

          </>
        )}
      </div>
      <div className="w-[40%] sticky -top-0">
        {listingType === 'vacation' && (
          <BookAndSale Price={price} ID={_id} />)}
        {owner && <UserInfo owner={owner} />}
      </div>
    </div>
  )
}

export default DetailComponents;