/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileNavItems({ navLinks }) {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  return (
    <div
      ref={dropDownMenuRef}
      onClick={() => setDropDownState(!dropDownState)}
      className="relative flex lg:flex xl:hidden text-darkBlue dark:text-white"
    >
      <RxHamburgerMenu className="size-8" />
      {dropDownState && (
        <ul
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-duration="700"
          className="z-10 bg-blue dark:bg-white absolute right-0 xl:top-10 lg:top-12 top-[44px] flex w-[200px] flex-col rounded-lg text-base"
        ></ul>
      )}
    </div>
  );
}

export default MobileNavItems;
