import React, {useRef,useState,useEffect} from 'react'
import {Input, Button} from '../Generic'
import { Container, Icons, MenuWrapper, Section, SelectAnt } from './style'
import { Dropdown } from "antd";
import uzeReplace from '../../hooks/useReplace';
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from '../../hooks/useSearch';


export const Filter = () => {
  const {REACT_APP_BASE_URL: url, REACT_APP_CLIENT_TOKEN: token} = process.env
  const location = useLocation()
  const navigate = useNavigate()
  const query = useSearch()

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()

  const roomsRef = useRef()

  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  // console.log(Number(query.get('category_id')), 'id');

  const [data, setData] = useState([])
  const [value, setValue] = useState('Select Category')
    
    useEffect(() => {
      fetch(`${url}/categories/list`,{
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${token}`,
      }
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || []);
          
        });
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
      let [d] = data?.filter((ctg)=> ctg.id === Number(query.get('category_id')))
      d?.name && setValue(d?.name)
      !query.get('category_id') && setValue('Select Category')
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location?.search, data])

  const onChange = ({target: {name, value}}) => {
    navigate(`${location?.pathname}${uzeReplace(name,value)}`)
  }

  const onChangeCategory =(category_id)=> {
    navigate(`/properties/${uzeReplace('category_id',category_id)}`);
  }
  const onChangeSort =(sort)=> {
    navigate(`/properties/${uzeReplace('sort',sort)}`);
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
      <Input onChange={onChange} name={'room'} ref={roomsRef} placeholder={'Rooms'} />
      {/* <Input ref={sortRef} placeholder={'Sort'} /> */}
      {/* <Input ref={sizeRef} placeholder={'Size'} /> */}
      <SelectAnt defaultValue={query.get('sort') || 'Select Sort'} onChange={onChangeSort}>
        <SelectAnt.Option  value={''}>
          Default
        </SelectAnt.Option>
        <SelectAnt.Option  value={'asc'}>
          O'suvchi
        </SelectAnt.Option>
        <SelectAnt.Option  value={'desc'}>
          Kamayuvchi
        </SelectAnt.Option>
      </SelectAnt>
      <SelectAnt defaultValue={value} onChange={onChangeCategory}>
        <SelectAnt.Option value={''}>Select Category</SelectAnt.Option>
        {
          data.map(value => {
            return <SelectAnt.Option key={value?.id} value={value?.id}>{value?.name}</SelectAnt.Option>
          })
        }
      </SelectAnt>
    </Section>
      <h1 className='subTitle'>Price</h1>
    <Section>
      <Input onChange={onChange} name={'min_price'} ref={minPriceRef} placeholder={'Min price'} />
      <Input onChange={onChange} name={'max_price'} ref={maxPriceRef} placeholder={'Max price'} />
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