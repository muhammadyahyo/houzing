import React , { useEffect, useState}from 'react'
import {  Container, Content } from './style'
// import { Carousel } from 'antd';
import HouseCard from '../HouseCard'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const {REACT_APP_BASE_URL: url} = process.env
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "-9px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: false,
  dots: true,
  // dots: true,
  // infinite: true,
  // speed: 500,
  // slidesToShow: 3,
  // slidesToScroll: 3,

  appendDots: (dots) => <h1>{dots}</h1>,
};




export const Recent = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
      fetch(`${url}/houses/list`)
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || []);
        });
    },[])
  return (
    <Container>
      <Content>
        <h1 className="title">Recent Properties for Rent</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              gap={20}
              key={value.id}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
        
    </Container>
  )
}

export default Recent

