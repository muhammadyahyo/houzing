import React, { useEffect, useState } from 'react'
import { Container } from './style'
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';


export const Proporties = () => {
  
  const [data, setData] = useState([])
  const {search} = useLocation()
  const navigate = useNavigate()
  const request = useRequest()
  console.log(search);

  useEffect(() => {
    // fetch(`${url}/houses/list${search}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData(res?.data || []);
    //   });

    request({ url: `/houses/list${search}` })
    .then((res) => {
      setData(res?.data || []);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSelect = (id)=>{
    navigate(`/properties/${id}`)
  }

  return (
    <React.Fragment>

          <div className="title" style={{marginBottom: '10px'}}>Properties</div>
          <div className="info" style={{textAlign: 'center'}}>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
          <Container>
          {
            data?.map((value, index) => {
              return <HouseCard onClick={()=>onSelect(value.id)} key={index}  data={value} /> // data={value}
            })
          }
          </Container>
    </React.Fragment>
  )
}
export default Proporties