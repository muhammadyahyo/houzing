import React from 'react'
import { Container, Content, Details, Divider, Icons, Img } from './style'
import  noimg  from "../../assets/img/noimg.jpeg";



export const HouseCard = ({data ={}, gap, onClick}) => {
  const {address,city,country,description,houseDetails,salePrice,price,attachments, category} = data;
  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} /> {/* attachments[0]?.imgPath || */}
      <Content>
        <div className="subTitle inline">
          {city || "New Apartment Nice Wiew"}, {country}, {description} 
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"} - {category?.name || 'Category'} {houseDetails?.room || 0}-rooms</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer="true">
        <Details.Item footer="true">
          <div style={{ textDecorationLine: "line-through" }} className="info">
            ${salePrice || 2800}/mo
          </div>
          <div className="subTitle">${price || 7500}/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard