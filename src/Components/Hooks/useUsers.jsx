import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useUsers = () => {
  
  const {data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
  });
  return [users];
};

export default useUsers;