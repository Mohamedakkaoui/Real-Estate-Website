import { useRef, useState } from "react";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const HoverMenuWithTransition = () => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <>
      <div
        className="flex items-center cursor-pointer  no-underline hover:text-[#FFA920] font-semibold text-base py-2 px-2 lg:-ml-2"
        ref={ref}
        {...anchorProps}
      >
        <span>Menu</span>
        <div className="pt-1 ">
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>

      <ControlledMenu
        {...hoverProps}
        {...menuState}
        anchorRef={ref}
        onClose={() => toggle(false)}
      >
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </ControlledMenu>
    </>
  );
};

export default HoverMenuWithTransition;
