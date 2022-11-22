import React from 'react'
import ApiWeather from './components/ApiWeather'

const Index = () => {
  return (
    <div className='divcont'>
        <h2>Api Weather - Temperatura</h2>
        <ApiWeather ph = "Pesquise aqui a cidade..."></ApiWeather>
    </div>
  )
}

export default Index