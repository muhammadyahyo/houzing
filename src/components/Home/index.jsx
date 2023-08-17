import React from 'react'
import Carousel from '../Carousel'
import HouseCard from '../HouseCard'
import Category from '../Category'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Carousel/>
      <Category/>
    </Container>
  )
}

export default Home