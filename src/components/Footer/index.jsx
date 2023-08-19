import React from 'react'
import {  Container, Content, Icon, Section, } from './style'


export const Footer = () => {
   
  return (
       <Container>
        <Content>
          <Content.Title>Contact Us</Content.Title>
          <Content.Item><Icon.Map/>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Content.Item>
          <Content.Item><Icon.Phone/>+998 90 175 88 24</Content.Item>
          <Content.Item><Icon.Email/>latifov.olmas@gmail.com</Content.Item>
          <Content.Item ><Icon.Facebook/><Icon.Twitter/><Icon.Instagram/><Icon.Linkedin/></Content.Item>
        </Content>
        <Content>
          <Content.Title>Discover</Content.Title>
          <Content.Item>Uzbekistan</Content.Item>
          <Content.Item>India</Content.Item>
          <Content.Item>UAE</Content.Item>
          <Content.Item>Korea</Content.Item>

        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <Content.Item>Apartments</Content.Item>
          <Content.Item>Condos</Content.Item>
          <Content.Item>Houses</Content.Item>
          <Content.Item>Offices</Content.Item>
          <Content.Item>Retail</Content.Item>
          <Content.Item>Villas</Content.Item>

        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <Content.Item>About Us</Content.Item>
          <Content.Item>Terms & Conditions</Content.Item>
          <Content.Item>Support Center</Content.Item>
          <Content.Item>Support Center</Content.Item>

        </Content>
  
      
   
        
    </Container>
   
  )
}

export default Footer

