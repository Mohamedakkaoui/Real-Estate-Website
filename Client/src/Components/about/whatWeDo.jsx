import { LuKeySquare } from "react-icons/lu";
import { MdOutlineShoppingBag ,  MdOutlineBedroomParent} from "react-icons/md";

export const focus = [
  {
    id: 1,
    icon : <MdOutlineShoppingBag />,
    name: "Buy a New Property",
    text: "Embark on the journey to find your perfect abode with our extensive listings and comprehensive services.",
  },
  {
    id: 2,
    icon : <LuKeySquare/>,
    name: "Sell a Property",
    text: "Maximize your property's value and find the right buyer with our comprehensive sales support and market insights.",
  },
  {
    id: 4,
    icon : <MdOutlineBedroomParent/>,
    name: "Rent a Property",
    text: "Discover your ideal rental from our wide selection of well-maintained and strategically located properties.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">what we do</h1>
        <h1 className="heading">our main focus your property grow</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3">
        {focus.map(({ id, name, icon, text }) => (
          <div
            className="px-3  py-6 text-center rounded-lg group hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-2xl">{icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
            <div className="hidden mt-4 group-hover:flex-center-center ">
              
              <button className="btn btn-primary bg-black hover:bg-[#FFA920] hover:text-white">view more details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
