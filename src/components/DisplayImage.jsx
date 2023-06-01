import React from "react";

export const DisplayImage = ({ url, alt }) => {
  return (
    <div className="text-center  border flex justify-center relative">
      <button className="absolute top-2 right-2 group/button bg-gray-300 p-2 rounded-full z-10">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="white"
          className="group-hover/button:fill-black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
            stroke="#000"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img
        className="w-full px-6 bg-transparent group-hover:opacity-80 group-hover:bg-opacity-80 group-hover:bg-gray-200 transition-all duration-500"
        src={url}
        alt={alt}
      />
      <button className="group/button group-hover:block hidden absolute bg-black group hover:bg-white p-2 rounded-md right-1 bottom-1">
        <svg id="SvgjsSvg1011" width="30" height="30" version="1.1">
          <defs id="SvgjsDefs1012"></defs>
          <g id="SvgjsG1013">
            <svg viewBox="0 0 24 24" width="30" height="30">
              <path
                fill="#fff"
                className="group-hover/button:fill-black"
                d="M6.4229,0.7125 C8.0229,-0.2375 10.0229,-0.2375 11.6229,0.7125 C13.2229,1.6625 14.1629,3.4125 14.0929,5.2625 L14.0929,5.2625 L14.0929,5.4925 C15.3529,5.4925 16.6829,6.3725 17.1429,8.5125 L17.1429,8.5125 L17.9129,14.5025 C18.4839,18.4125 16.2129,20.0025 13.1629,20.0025 L13.1629,20.0025 L4.8729,20.0025 C1.8139,20.0025 -0.5271,18.9025 0.1029,14.5025 L0.1029,14.5025 L0.8829,8.5125 C1.0029,7.6225 1.4329,6.7925 2.1029,6.1825 C2.6139,5.7335 3.2729,5.4925 3.9529,5.4925 L3.9529,5.4925 L3.9529,5.2625 C3.8729,3.4125 4.8239,1.6625 6.4229,0.7125 Z M11.8929,8.7125 C11.4039,8.7125 11.0029,9.1025 11.0029,9.5925 C11.0029,10.0725 11.4039,10.4725 11.8929,10.4725 C12.1229,10.4725 12.3529,10.3825 12.5129,10.2125 C12.6829,10.0525 12.7729,9.8225 12.7729,9.5925 C12.7729,9.1025 12.3729,8.7125 11.8929,8.7125 Z M6.0929,8.7125 C5.6029,8.7125 5.2029,9.1025 5.2029,9.5925 C5.2029,10.0725 5.6029,10.4725 6.0929,10.4725 C6.5829,10.4725 6.9729,10.0725 6.9729,9.5925 C6.9729,9.1025 6.5829,8.7125 6.0929,8.7125 Z M9.0029,1.7425 C7.0529,1.7425 5.4729,3.3225 5.4729,5.2625 L5.4729,5.2625 L5.4729,5.4835 L12.5429,5.4835 L12.5429,5.2625 C12.5429,3.3225 10.9629,1.7425 9.0029,1.7425 Z"
                transform="translate(3 2)"
              ></path>
            </svg>
          </g>
        </svg>
      </button>
    </div>
  );
};
