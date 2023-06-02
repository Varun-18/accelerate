import _ from "lodash";
import React from "react";
import { Socials } from "./Socials";

export const Footer = ({ data }) => {
  return (
    <div className="bg-black cursor-default">
      {_.size(data) > 0 ? (
        <div className="max-w-[1400px] mx-auto text-white">
          <div className=" py-8  max-w-[1200px] w-full mx-auto md:text-base text-sm  md:flex px-5 justify-between">
            <div className="py-5 px-5 md:max-w-[30%] sm:max-w-[45%] max-w-[100%]">
              <img
                src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F1amBpNGegNjdgiOqCS5mU2%2F69b473861ae0049f7f9cff119b4f5085%2Ffooter-logo_1.png&w=256&q=75"
                alt="logo"
                className="mb-5"
              />
              <span className="my-2 text-[#888]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                soluta commodi voluptates quo fuga ipsa, necessitatibus amet
                quas aut numquam?
              </span>
            </div>
            {data.map((item, index) => (
              <div key={index} className="px-5 md:my-0 my-4">
                <h3 className="font-bold md:py-3 py-2 text-[#ddd]">{item.title}</h3>
                <ul className="">
                  {item.content.map((item, index) => (
                    <li
                      key={index}
                      className="md:py-1.5 py-1 text-[#888] hover:text-red-700 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <hr className="border-[#555]" />
      <div className="md:mx-0 mx-5">
        <Socials />
      </div>
    </div>
  );
};
