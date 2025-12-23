import { reserveStock, getReservationHistory } from "../service/reservations.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useReserve(){
  const queryClient = useQueryClient()

  const {mutate: reserveMutate, isPending: reserveIsLoading, isError: reserveIsError} = useMutation({
    mutationFn: reserveStock,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['reservations']})
      queryClient.invalidateQueries({queryKey: ['items']})
    }
  })

  const {data: reserveHistory, isLoading: reserveHistoryIsLoading, isError: reserveHistoryIsError}= useQuery({
    queryKey: ['reservations'],
    queryFn: getReservationHistory,
  })


  return {
    reserveMutate,
    reserveIsLoading,
    reserveIsError,
    reserveHistory,
    reserveHistoryIsLoading,
    reserveHistoryIsError
  }
}