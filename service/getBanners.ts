import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getBanners = () => {
  const {data = [], isLoading} = useQuery({
    queryKey:['banners-all'],
    queryFn:() => instance().get("/banners").then(res => res.data)
  })

  return {data, isLoading}
}

export default getBanners