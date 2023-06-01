import { useSelector } from "react-redux";

const useBanner = () => {
  const { banner } = useSelector((state) => state.data);

  return { banner };
};

export default useBanner;
