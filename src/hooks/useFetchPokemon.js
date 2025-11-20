import { useQuery } from "@tanstack/react-query";
import { fetchPokemoneListData } from "../services/fetchPokemonListData";

function useFetchPokemon({offset}) {

    const {
        data: pokeList,
        isLoading,
        isError,
        error,
        isFetching,
    } = useQuery({
        queryKey: ["pokemons", offset],
        queryFn: () => fetchPokemoneListData({offset}),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        pokeList,
        isLoading,
        isError,
        error,
        isFetching,
    }
    
}

export default useFetchPokemon