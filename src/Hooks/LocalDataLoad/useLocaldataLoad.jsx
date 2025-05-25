import { useContext } from "react";
import useLocalBaseUrl from "../LocalBaseURL/useLocalBaseUrl";
import { useQuery } from "@tanstack/react-query";
import { Auth } from "../../Context/AuthProvider";

const useLocaldataLoad = (input) => {
  const baseUrl = useLocalBaseUrl();
  const { user } = useContext(Auth);

  // TanStack Query
  const {
    refetch,
    isPending,
    data = [],
  } = useQuery({
    queryKey: [`${input}`, input],
    queryFn: async () => {
      const res = await baseUrl.get(input, {
        headers: {
          Authorization: `${user}`,
        },
      });
      return res.data;
    },
    enabled: !!input,
  });

  return [data, refetch, isPending];
};

export default useLocaldataLoad;
