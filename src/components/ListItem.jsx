import React from "react";
import useListItem from "../talons/useListItem";
import { SubCategory } from "./SubCategory";

export const ListItem = ({ data }) => {
  const { showMenu, setShowMenu } = useListItem();
  return (
    <div>
      <li
        className="sm:py-3 sm:px-3 sm:mx-4 uppercase sm:text-base md:text-xl  text-xs mx-2 font-semibold flex justify-center items-center"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <span className="mx-2 cursor-pointer">{data.category}</span>
        <i className="fa fa-angle-down " aria-hidden="true"></i>
      </li>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {showMenu ? (
          <div className="absolute text-black z-10 cursor-pointer mx-auto bg-white max-w-4xl w-full left-0 right-0 border-2 shadow-md">
            <ul className=" flex">
              {data.subCategory.map((subCat, index) => (
                <SubCategory key={index} data={subCat.fields} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
