import React from 'react'
import Banner from '../Banner'
import Carousel from '../Carousel'
import Category from '../Category'
import Recent from '../Recent'
import Recommended from '../Recommended'
import Why from '../Why'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Carousel/>
      <Recommended/>
      <Why/>
      <Category/>
      <Banner/>
      <Recent/>
    </Container>
  )
}

export default Home