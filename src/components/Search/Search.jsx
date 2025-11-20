import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchPokemoneListData } from '../../services/fetchPokemonListData';

function Search() {

    const [query, setQuery] = useState('')
    const [filtered, setFiltered] = useState([])

    const [offset, setOffset] = useState(0)

    const navigate = useNavigate();


    const {
        data: pokeList,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["pokemons", offset],
        queryFn: () => fetchPokemoneListData({offset}),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    function onChangeHandler(event) {
        const value = event.target.value;
        setQuery(value);
    }

    useEffect(() => {
        if (!pokeList?.results) return;  // Safe check
        const timer = setTimeout(() => {
            const filteredList = pokeList.results.filter((poke) =>
                poke.name.toLowerCase().includes(query.toLowerCase())
            );

            setFiltered(filteredList);
        }, 1000)
        
        return () => clearTimeout(timer);
    }, [query]);

    function onClickRedirect({id}) {
        navigate(`/details/${id}`)
        setQuery("");       // input empty
        setFiltered([]);    // list hide
    }
                                  
    function getIdFromURL(url) {
        const urlParts = url.split("/");
        return urlParts[urlParts.length-2];
    }

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>ERROR: {error.message}</div>;



  return (
    <div className='relative'>
        <input
          type="text"
          value={query}
          onChange={onChangeHandler}
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className='absolute z-10'>
            {query && filtered.map((poke, idx) => {
                const id = getIdFromURL(poke.url);
                const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                return (
                    <li 
                        key={idx}
                        className='list-none md:w-[200px] w-[150px] m-1 px-2 bg-orange-700 rounded-xl cursor-pointer flex items-center justify-between'
                        onClick={() => onClickRedirect({id})}
                    >
                        <img 
                            src={imageURL} 
                            alt={poke.name}
                            className='h-[40px] w-auto'
                        />
                        <p>{poke.name}</p>
                    </li>
                )
            })}
      </div>
    </div>
  )
}

export default Search