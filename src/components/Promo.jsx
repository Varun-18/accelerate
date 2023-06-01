import _ from "lodash";
import React from "react";

export const Promo = ({ data }) => {
  return (
    <div>
      {_.size(data) > 0 ? (
        <div className="flex justify-evenly py-5 px-1 max-w-[1400px] mx-auto">
          {data.map((item, index) => (
            <img
              key={index}
              className="w-[650px] "
              src={item.image.fields.file.url}
              alt={item.alt}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
