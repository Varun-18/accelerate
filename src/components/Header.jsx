import _ from "lodash";
import React from "react";
import css from "../assets/css/header.module.css";
import useHeader from "../talons/useHeader";
import { HamburgerItem } from "./HamburgerItem";

export const Header = () => {
  const { show, setShow, navbar } = useHeader();
  console.log(navbar, "888888888");
  return (
    <div>
      <div className=" flex py-3 px-2 justify-between items-center ">
        <div className="md:hidden block " onClick={() => setShow(true)}>
          <span className="mx-4">
            <svg
              width="25px"
              height="auto"
              viewBox="0 0 12 12"
              enableBackground="new 0 0 12 12"
              id="Слой_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5" />

                <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5" />

                <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5" />
              </g>
            </svg>
          </span>
        </div>
        <div>
          <img
            src="https://krish-commercetools-accelerator.vercel.app/_next/static/media/AccelerateLogo.96a53e46.svg"
            alt="logo"
            className="max-w-[250px] "
          />
        </div>
        {show ? (
          <div className="absolute top-0 left-0 flex bg-white h-full w-full z-30 justify-between transition-all ">
            <div className="p-3">
              <h2 className="uppercase text-3xl font-bold">Categories</h2>
              <ol>
                {navbar.map((items, index) => (
                  <HamburgerItem data={items} key={index} />
                ))}
              </ol>
            </div>
            <span
              className="p-3 text-2xl absolute top-0 right-2"
              onClick={() => setShow(false)}
            >
              &#10005;
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
