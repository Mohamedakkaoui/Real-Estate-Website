import React from "react";
import Image1 from "../../assets/Office.jpeg";
import Image2 from "../../assets/Villa.jpg";
import Image3 from "../../assets/property26.jpg";
import Image4 from "../../assets/property17.jpg";
import { Image } from "lucide-react";

function ImagesSection() {
  return (
    <div className="flex w-[80%] m-auto h-[550px]  gap-2 mb-9">
      <div className="row-span-3 w-[50%] h-full col-span-2 ">
        <img src={Image1} alt="Image 1" className="h-full rounded-lg" />
      </div>

      <div className="w-[50%] h-full flex flex-col gap-2">
        <div className="h-[50%]">
          <img
            src={Image2}
            alt="Image 2"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div className="flex h-[50%] gap-2">
          <div className=" h-full">
            <img src={Image3} alt="Image 3" className="h-full rounded-lg" />
          </div>
          <div className="h-full relative hover:cursor-pointer">
            <img
              src={Image4}
              alt="Image 4"
              className="h-full brightness-50 rounded-lg"
            />
            <div className="text-white text-sm font-semibold inset-0 flex flex-col items-center justify-center absolute">
              <div className="mb-2">
                <Image />
              </div>

              <div>
                <p>
                  Show all <br /> <span className="ml-2">Photos</span>
                </p>
              </div>
            </div>
            {/*  inset-0 flex items-center justify-center */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesSection;
