import _ from "lodash";
import React from "react";
import useCategories from "../talons/useCategories";

export const TopCategories = () => {
  const { categories } = useCategories();
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-3">
        {_.size(categories) > 0 ? (
          <div>
            <h3 className="capitalize text-3xl font-bold text-center text-[#222]">
              shop by categories
            </h3>
            <div className="flex mx-2 py-3.5">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className=" m-2 flex flex-col text-[#444] hover:text-red-600 cursor-pointer"
                >
                  <img
                    className="w-52"
                    src={item.image.fields.file.url}
                    alt={item.alt}
                  />
                  <p className=" uppercase text-center font-bold py-2">
                    {item.categoryTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
