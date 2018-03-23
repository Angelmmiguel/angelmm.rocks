import React from "react";

const Logo = props => (
  <svg
    width={43}
    height={41}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M35.154 13.498C39.81 15.898 43 20.803 43 26.464 43 34.492 36.583 41 28.667 41c-2.611 0-5.059-.708-7.167-1.945A14.115 14.115 0 0 1 14.333 41C6.417 41 0 34.492 0 26.464c0-5.108 2.597-9.6 6.526-12.193C6.666 6.365 13.028 0 20.856 0 28.43 0 34.63 5.954 35.155 13.498z"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fillOpacity={0.8} fill="#F24592" cx={14.5} cy={26.5} r={14.5} />
      <circle fillOpacity={0.8} fill="#8A2FFF" cx={21.5} cy={14.5} r={14.5} />
      <circle fillOpacity={0.8} fill="#F24592" cx={28.5} cy={26.5} r={14.5} />
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        d="M36.392 64.482l-6.024-17.628H11.151L5.127 64.482H-1.47L20.52 3.075h.765l21.99 61.407h-6.883zM12.955 41.559h15.712L20.81 18.543 12.955 41.56z"
        strokeOpacity={0.245}
        stroke="#8A2FFF"
        strokeWidth={2}
        fill="#FFF"
        mask="url(#b)"
      />
    </g>
  </svg>
);

export default Logo;

