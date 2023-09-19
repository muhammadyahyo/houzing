import React, { useContext, useState } from 'react'
import { Container } from './style'
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from 'react-router-dom';
// import useRequest from '../../hooks/useRequest';
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";

const {REACT_APP_BASE_URL: url} = process.env



export const Favourite = () => {
  
  const [data, setData] = useState([])
  const {search} = useLocation()
  const navigate = useNavigate()
  // const request = useRequest()
  const [ ,dispatch] = useContext(PropertiesContext)

  const {refetch} = useQuery([search],() => {
    return fetch(`${url}/houses/getAll/favouriteList`,{
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        dispatch({type: 'refetch', payload: refetch})
      });

    // request({ url: `/houses/getAll/favouriteList` })
    // .then((res) => {
    //   setData(res?.data || []);
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const onSelect = (id)=>{
    navigate(`/properties/${id}`)
  }

  return (
    <React.Fragment>

          <div className="title" style={{marginBottom: '10px'}}>Favourite</div>
          <div className="info" style={{textAlign: 'center'}}>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
          <Container>
          { data?.length ?
            data.map((value, index) => {
              return <HouseCard onClick={()=>onSelect(value.id)} key={index}  data={value} /> // data={value}
            }) : <h1>No data Favourite</h1>
          }
          </Container> 
    </React.Fragment>
  )   
}
export default Favourite