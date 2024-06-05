import { AiFillStar } from "react-icons/ai";

const SingleReviewCard = ({
  id,
  name,
  review,
  rating,
}) => {
  return (
    <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
      <div className="p-5">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`text-lg ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <h1 className="text-xl font-semibold capitalize mb-2">{name}</h1>
        <p className="text-sm text-gray-700">{review}</p>
      </div>
    </div>
  );
};

export default SingleReviewCard;
