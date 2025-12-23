import { stockOutItem, getStockOutHistory } from "../service/stockout.service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function useStock(){
  const queryClient = useQueryClient()

  const {mutate: stockMutate, isPending: stockIsLoading, isError: stockIsError} = useMutation({
    mutationFn: stockOutItem,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['stock-outs']})
      queryClient.invalidateQueries({queryKey: ['items']})
    }
  })

  const {data: stockHistory, isLoading: stockHistoryIsLoading, isError: stockHistoryIsError}= useQuery({
    queryKey: ['stock-outs'],
    queryFn: getStockOutHistory,
  })

  return {
    stockMutate,
    stockIsLoading,
    stockIsError,
    stockHistory,
    stockHistoryIsLoading,
    stockHistoryIsError
  }
}