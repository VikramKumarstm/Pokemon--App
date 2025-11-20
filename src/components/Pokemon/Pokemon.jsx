import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchPokemoneListData } from "../../services/fetchPokemonListData";
import { useNavigate } from "react-router-dom";

function Pokemon() {

  const [offset, setOffset] = useState(0) //use for pagination control
  const [allPokemons, setAllPokemons] = useState([]) // New state for infinite scroll

  const navigate = useNavigate()

  // React Query Call
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

  function handleClickRedirect(id) {
    navigate(`/details/${id}`)
  }

  //add new data inside allPokemons
  useEffect(() => {
    if(pokeList?.results) {
      setAllPokemons((prev) => [...prev, ...pokeList.results]);
    }
  }, [pokeList])

  //detect scrolling near bottom
  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomPosition = document.body.offsetHeight - 200;

      if (scrollPosition >= bottomPosition) {
        setOffset((prev) => prev + 10)
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isFetching]);


  if (isLoading && allPokemons.length === 0) return <div>Loading...</div>;

  if (isError) return <div>ERROR: {error.message}</div>;

  return (
    <div className="md:w-[80%] w-full mx-auto my-5 md:flex flex-wrap justify-between gap-y-4">
      {/* Render all Pokemons */}
      {allPokemons.map((pokemon, idx) => {

        const id = idx+1;
        const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
        return (
          <div onClick={() => handleClickRedirect(id)} key={idx} className="md:w-[24%] text-[#ccc] shadow-2xl p-4 cursor-pointer">
            <img
              src={imageURL}
              alt="POKEMON"
              className="md:w-[200px] md:h-auto"
            />

            <h2 className="text-3xl font-bold pt-3">{pokemon.name}</h2>
          </div>
        );
      })}

      {/* Loading idicator */}
      {isFetching && <p className="text-center text-xl text-white">Loading...</p>}
    </div>
  );
}

export default Pokemon;
