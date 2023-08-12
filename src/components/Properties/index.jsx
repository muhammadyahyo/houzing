import React, { useEffect, useState } from 'react'
import { Container } from './style'
import HouseCard from "../HouseCard";
import { useLocation } from 'react-router-dom';

const {REACT_APP_BASE_URL: url} = process.env

export const Proporties = () => {
  
  const [data, setData] = useState([])
  const {search} = useLocation()
  console.log(search);

  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  },[search])
  return (
    <Container>
      
      {
        data?.map((value, index) => {
          return <HouseCard key={index}  data={value} /> // data={value}
        })
      }
    </Container>
  )
}
export default Proporties