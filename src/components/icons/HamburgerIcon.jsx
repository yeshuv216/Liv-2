import React from "react";

const HamburgerIcon = (props) => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        y1="1.25"
        x2="20"
        y2="1.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        y1="11.25"
        x2="20"
        y2="11.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default HamburgerIcon;
