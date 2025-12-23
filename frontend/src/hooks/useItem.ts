import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../service/item.service";

export default function useItem(){
  const {data: itemData, isLoading: itemIsLoading, isError: itemIsError, error: itemError} = useQuery({
    queryKey: ['items'],
    queryFn: getAllItems,
  })

  return {
    itemData,
    itemIsLoading,
    itemIsError,
    itemError
  }
}