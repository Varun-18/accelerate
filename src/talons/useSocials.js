import { useSelector } from "react-redux";

const useSocials = () => {
  const { socials } = useSelector((state) => state.data);
  return { socials };
};

export default useSocials;
