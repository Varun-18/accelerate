import React from "react";
import useSubHam from "../talons/useSubHam";

export const SubHamburger = ({ data }) => {
  const { show, toggle } = useSubHam();
  return (
    <li>
      <div>
        <span className="text-xl" onClick={() => toggle()}>{data.title}</span>
        {show ? (
          <div className="ml-10">
            <ul>
              {data.subCategoryItems.map((item) => (
                <li className="text-lg">{item.fields.name}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </li>
  );
};
