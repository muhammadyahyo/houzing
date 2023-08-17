import React , { useEffect, useState}from 'react'
import {  Container,  } from './style'
// import { Carousel } from 'antd';
import CategoryCard from '../CategoryCard'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const {REACT_APP_BASE_URL: url, REACT_APP_CLIENT_TOKEN: token} = process.env
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 4,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};




export const Category = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
      fetch(`${url}/categories/list`,{
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
          'Authorization': 'Bearer ' + `${token}`,
      }
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || []);
        });
    }, []);
  return (
    <Container>
        <Slider {...settings}>
          {
            data.map(value => {
              return <CategoryCard onClick={()=> navigate(`/properties?category=${value?.name}`)} data={value}/>
            })
          }       
        </Slider> 
        
    </Container>
  )
}

export default Category

