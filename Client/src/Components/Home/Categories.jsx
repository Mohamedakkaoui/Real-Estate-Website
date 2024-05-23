import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../../Data/DummyData";
import Image from "../../assets/property17.jpg"
import './Categories.css'

const Categories = () => {


  const categoryContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoryContainer.current.scrollLeft += 500)
      : (categoryContainer.current.scrollLeft -= 500);
    categoryContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  }

  return (
    <div className="pt-10 pb-16 w-[90%]  mx-auto mt-10 hide-scrollbar">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <h1 className="sub-heading">categories</h1>
          <h1 className="heading">
            find your dream house by searching our popular categories
          </h1>
          <p className="mt-3">
          Explore a wide selection of properties across different categories tailored to meet your housing needs. From cozy apartments to spacious family homes, find the perfect place to call your own.
          </p>
          <button className="mt-4 bg-[#FFA920] text-white font-semibold  rounded-lg px-5 py-3">all categories</button>
        </div>
        <div className="md:col-span-3 ">
          <div className="justify-end flex-align-center gap-x-3">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div>

          <div
            className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {categories.map(({ id, name, number }) => (
              <div
                key={id}
                className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <Link className="!opacity-100">
                    <img
                      src={Image}
                      alt={name}
                      className="w-full  h-[300px] object-cover group-hover:scale-125 transition-a"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{number} Listings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;