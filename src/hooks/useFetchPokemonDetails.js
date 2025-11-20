import { useQuery } from "@tanstack/react-query"
import { fetchPokemonDetails } from "../services/fetchPokemonDetails"

function useFetchPokemonDetails({id}) {
    const {data: pokemon, isError, error, isLoading} = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonDetails({id}),
    cacheTime: 1000*60*2,
    staleTime: 1000*60*2
  })

  return {
    pokemon,
    isError,
    error,
    isLoading,
  }
}

export default useFetchPokemonDetails