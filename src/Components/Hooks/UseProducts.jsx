import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useProducts = () => {
  
  const {data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://api.restful-api.dev/objects");
      return res.data;
    },
  });
  return [products];
};

export default useProducts;