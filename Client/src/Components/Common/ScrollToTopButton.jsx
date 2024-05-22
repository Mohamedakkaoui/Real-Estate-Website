import React from "react";
import ScrollToTop from "react-scroll-up";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTopButton() {
  return (
      <div className="relatie z-[300]">
        <ScrollToTop showUnder={160}>
          <div className="rounded-full p-2 bg-[#FFA920] ">
            <IoIosArrowUp className="size-6  text-white "/>
          </div>
        </ScrollToTop>
      </div>
  );
}

export default ScrollToTopButton;
