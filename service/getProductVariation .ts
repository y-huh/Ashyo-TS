import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

const getProductVariation = (id: string | any) => {
  const { data = {}, isLoading } = useQuery({
    queryKey: ["product_variation", id],
    queryFn: () => instance().get(`/variations/${id}`).then(res => res.data)
  });

  return { data, isLoading };
};

export default getProductVariation;
