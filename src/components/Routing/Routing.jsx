import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../../pages/Layout'
import Home from '../../pages/Home'
import PokemonDetailsPage from '../../pages/PokemonDetailsPage'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/details/:id' element={<PokemonDetailsPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default Routing