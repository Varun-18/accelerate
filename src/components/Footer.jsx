import _ from "lodash";
import React from "react";
import { Socials } from "./Socials";

export const Footer = ({ data }) => {
  return (
    <div className="bg-black cursor-default">
      {_.size(data) > 0 ? (
        <div className="max-w-[1400px] mx-auto text-white">
          <div className=" py-8  max-w-[1200px] w-full mx-auto flex justify-between">
            <div className="py-5 max-w-[350px]">
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
              <div key={index} className="px-5">
                <h3 className="font-bold py-3 text-[#ddd]">{item.title}</h3>
                <ul>
                  {item.content.map((item, index) => (
                    <li
                      key={index}
                      className="py-1.5 text-[#888] hover:text-red-700 cursor-pointer"
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
      <Socials />
    </div>
  );
};
