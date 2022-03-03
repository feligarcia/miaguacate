import React from 'react'
import CarruselHome from '../components/CarruselHome'
import CategoriasHome from '../components/CategoriasHome'
import Footer from '../components/Footer'
import NavIni from '../components/NavIni'
import NavUser from '../components/NavUser'
import {ModalIni} from '../components/ModalIni'

const Home = () => {
  return (
    <div>
      <NavUser />
      <NavIni />
      <CarruselHome />

      <div>
        <h2>Categorias por buscar</h2>
        <CategoriasHome />
      </div>
      <Footer />
      <ModalIni />
    </div>
    
  )
}

export default Home