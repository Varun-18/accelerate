import { useSelector } from "react-redux";

const useCategories = () => {
  const { categories } = useSelector((state) => state.data);

  return { categories };
};

export default useCategories;
