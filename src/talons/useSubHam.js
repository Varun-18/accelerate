import React, { useState } from "react";

const useSubHam = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default useSubHam;
