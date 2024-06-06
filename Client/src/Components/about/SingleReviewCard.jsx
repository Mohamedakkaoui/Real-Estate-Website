import { AiFillStar } from "react-icons/ai";

const SingleReviewCard = ({
  name,
  review,
  rating,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-8 shadow-sm max-w-sm mx-auto mt-19">
      {/* Stars */}
      <div className="text-violet-500 flex gap-2">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className={`text-lg ${index < rating ? 'text-orange-500' : 'text-gray-300'}`}/>
        ))}
      </div>
      {/* Review Text */}
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
        {review}
      </p>
      {/* Reviewer Info */}
      <div className="mt-6 flex items-center gap-6">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <img alt={name} src={`/images/${image}`} width="50" height="50" decoding="async" className="inline-block" loading="lazy" style={{ color: 'transparent' }} />
          </div>
        </div>
        <div>
          <p className="leading-relaxed tracking-wide text-gray-200">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewCard;