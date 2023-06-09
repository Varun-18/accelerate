import React, { useState } from "react";

const useHamburger = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default useHamburger;
