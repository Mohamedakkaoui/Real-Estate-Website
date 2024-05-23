import React from "react";

function Description() {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold">
          {" "}
          Property description
        </span>
      </div>
      <div className="w-[95%] m-auto mt-3 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus
        leo, blandit vitae diam a, vestibulum viverra nisi. Vestibulum
        ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar.
        Integer et libero ut purus bibendum gravida non ac tellus. Proin sed
        tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur
        magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu
        est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat
        nunc. Aliquam non lorem consequat, luctus dui et, auctor nisi. Aenean
        placerat sapien at augue lacinia, non semper urna tempor. Mauris sit
        amet elit orci.
      </div>
    </div>
  );
}

export default Description;
