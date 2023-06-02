import React from "react";
import useHamburger from "../talons/useHamburger";
import { SubHamburger } from "./SubHamburger";

export const HamburgerItem = ({ data }) => {
  const { show, toggle } = useHamburger();
  return (
    <li>
      <div>
        <div
          className="cursor-pointer  flex items-center"
          onClick={() => toggle()}
        >
          <span className="px-2 text-2xl">{data.category}</span>
          <span>
            <i className="fa fa-angle-down " aria-hidden="true"></i>
          </span>
        </div>
        {show ? (
          <div className="ml-5">
            <ul>
              {data.subCategory.map((item, index) => (
                <SubHamburger data={item.fields} key={index} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </li>
  );
};
