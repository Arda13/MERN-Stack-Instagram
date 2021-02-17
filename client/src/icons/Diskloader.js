import * as React from "react";

function SvgDiskloader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
      }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
     
      <g transform="matrix(.7 0 0 .7 50 50)">
        <circle r={50} fill="#292664" />
        <circle cy={-28} r={15} fill="#667395">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 0 0;360 0 0"
          />
        </circle>
      </g>
      <text x="22" y="55" fill="white" >Loading</text>
    </svg>
  );
}

export default SvgDiskloader;
