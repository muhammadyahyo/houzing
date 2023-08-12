import React, {useRef} from 'react'
import {Input, Button} from '../Generic'
import { Container, Icons, MenuWrapper, Section } from './style'
import { Dropdown } from "antd";
import uzeReplace from '../../hooks/useReplace';
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from '../../hooks/useSearch';


export const Filter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = useSearch()

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()
  const roomsRef = useRef()
  const sizeRef = useRef()
  const sortRef = useRef()
  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  console.log(query.get('region'), 'params');

  const onChange = ({target: {name, value}}) => {
    console.log(name, value);
    navigate(`${location?.pathname}${uzeReplace(name,value)}`)
  }


  const menu = <MenuWrapper>
      <h1 className='subTitle'>Address</h1>
    <Section>
      <Input defaultValue={query.get('country')} onChange={onChange} ref={countryRef} name={'country'} placeholder={'Country'} />
      <Input defaultValue={query.get('region')} onChange={onChange} ref={regionRef} name={'region'} placeholder={'Region'} />
      <Input defaultValue={query.get('city')} onChange={onChange} ref={cityRef} name={'city'} placeholder={'City'} />
      <Input defaultValue={query.get('zip_code')} onChange={onChange} ref={zipRef} name={'zip_code'} placeholder={'Zip Code'} />
    </Section>
      <h1 className='subTitle'>Apartment info</h1>
    <Section>
      <Input ref={roomsRef} placeholder={'Rooms'} />
      <Input ref={sizeRef} placeholder={'Size'} />
      <Input ref={sortRef} placeholder={'Sort'} />
    </Section>
      <h1 className='subTitle'>Price</h1>
    <Section>
      <Input ref={minPriceRef} placeholder={'Min price'} />
      <Input ref={maxPriceRef} placeholder={'Max price'} />
    </Section>
    

  </MenuWrapper>

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger={['click']}
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      
        <Button>
          <Icons.Search />
          Search
        </Button>
    </Container>
  );
}

export default Filter