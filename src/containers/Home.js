import React from 'react'
import CarruselHome from '../components/CarruselHome'
import CategoriasHome from '../components/CategoriasHome'

const Home = () => {
  return (
    <div>
      <CarruselHome />

      <div>
        <h2>Categorias por buscar</h2>
        <CategoriasHome />
      </div>

    </div>
    
  )
}

export default Home