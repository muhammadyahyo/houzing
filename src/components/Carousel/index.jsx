import React , {useRef}from 'react'
import { Arrow, Blur, Container, Content, Img } from './style'
import { Carousel } from 'antd';
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";




export const GenCarousel = () => {
    const slider = useRef();
    const onChange =(currentSlide)=>{
        console.log(currentSlide);
    }

    const onMove =({target: {dataset: {name}}})=> {
         if(name === 'right') slider.current.next()
         if(name === 'left') slider.current.prev()
    }

  return (
    <Container>
        <Carousel ref={slider} afterChange={onChange}>
           <Img src={img1}/>
           <Img src={img2}/>
        </Carousel> 
        <Blur/>
        <Content>
           <Content.Title>Skyper Pool Partment</Content.Title>
           <Content.Desc>112 Glenwood Ave Hyde park, Boston, MA</Content.Desc> 
           <Content.Title>$5,250 / month</Content.Title>
        </Content>
        <Arrow onClick={onMove} data-name='left' left={'true'}/>
        <Arrow onClick={onMove} data-name='right'/>
    </Container>
  )
}

export default GenCarousel