import React from 'react'
import { Container, Content, Details, Divider, Icons, Img } from './style'
import  noimg  from "../../assets/img/noimg.jpeg";



export const HouseCard = ({url, title, bed, bath, garage, ruler, info}) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider/>
          <Content footer='true'>
            <Details.Item footer='true'>
              <div style={{textDecorationLine: 'line-through'}} className="info">$2,800/mo</div>
              <div className="subTitle">$7,500/mo</div>
            </Details.Item>
            <Details.Item row='true'>
              <Icons.Resize/>
              <Icons.Love/>
            </Details.Item>
          </Content>
    </Container>
  );
}

export default HouseCard