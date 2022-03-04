import React from 'react'
import { Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavIni from '../components/NavIni'
import NavUser from '../components/NavUser'
import TableInver from '../components/TableInver'

const Simulador = () => {
  return (
      
    <div>
        <NavUser />
        <NavIni />
       <h1> Simulador </h1>
        <TableInver />
        <Button>Iniciar simulacion</Button>
        <h1>Tir:</h1>
        <Footer /></div>
  )
}

export default Simulador