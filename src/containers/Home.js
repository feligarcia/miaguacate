import React from 'react'
import CarruselHome from '../components/CarruselHome'
import CategoriasHome from '../components/CategoriasHome'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <CarruselHome />

      <div>
        <h2>Categorias por buscar</h2>
        <CategoriasHome />
      </div>
      <Footer />
    </div>
    
  )
}

export default Home