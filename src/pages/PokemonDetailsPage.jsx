import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPokemonDetails } from '../services/fetchPokemonDetails'
import { useParams } from 'react-router-dom'
import useFetchPokemonDetails from '../hooks/useFetchPokemonDetails';

function PokemonDetailsPage() {

  const {id} = useParams();

  const {pokemon, isError, error, isLoading} = useFetchPokemonDetails({id})

  if(isLoading) return <div>Loading...</div>

  if(isError) return <div>Error: {error.message}</div>

  return (
    <div className='w-full flex justify-center'>
      <div className=''>
        <img 
          src={pokemon.sprites?.other?.home?.front_default} 
          alt={pokemon.name} 
          className='h-[350px] w-auto pb-4'
        />
        <h2 className='text-5xl font-bold text-center'>{pokemon.name}</h2>
        <div className='flex items-center justify-center gap-x-4 my-5'>
          <h4>Types :</h4>
          {pokemon.types.map((t, index) => (
            <p 
              key={index}
              className='bg-amber-700 text-white px-4 py-2 rounded-xl'
            >
              {t.type.name}
            </p>
          ))}
        </div>
        <h2 className='text-center'>Weight : {pokemon.weight}</h2>
      </div>
      
    </div>
  )
}

export default PokemonDetailsPage