import React, { useState } from "react";
import { useSelector } from "react-redux";

const useHeader = () => {
  const { navbar } = useSelector((state) => state.data);
  let [show, setShow] = useState(false);

  return { show, setShow, navbar };
};

export default useHeader;
