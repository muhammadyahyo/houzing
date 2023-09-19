import React, { useState } from 'react'
import { AntTable, Container, Icons, User, Wrapper } from './style'
import { useLocation, useNavigate } from 'react-router-dom';
// import useRequest from '../../hooks/useRequest';
import { useQuery } from "react-query";
import { Button } from '../Generic';
import noimg from "../../assets/img/noimg.jpeg";
import { message } from 'antd';


export const MyProfile = () => {
  
  const [data, setData] = useState([])
  const {search} = useLocation()
  const navigate = useNavigate()
  // const request = useRequest()
  // console.log(search);

  const { refetch} = useQuery([search], () => {
    fetch(`http://localhost:8081/api/v1/houses/me`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });

    // request({ url: `/houses/list` })
    // .then((res) => {
    //   setData(res?.data || []);
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const onDelete =(id)=>{
    fetch(`http://localhost:8081/api/v1/houses/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if(res?.success){
          message.info("Successfully deleted")
          refetch()
        }
      });

  }
  
  
 

  const columns = [
    {
      title: "Listing Title",
      key: 'name',
      render: (data) => <User>
        <User.Img src={data?.attachments && (data?.attachments[0]?.imgPath || noimg)}/>
        <User flex={"true"}>
          <div className="subTitle">{data?.country}, {data?.address}</div>
          <div className="info">{data?.city}, {data?.region}</div>
          <del style={{marginTop: "auto"}}  className="info">$ {data?.price}</del>
        </User>
        <div style={{marginLeft: 'auto'}}>
          <Button>For Sale</Button>
        </div>
      </User>,
      // width:150,
    },
    {
      title: "Year Build",
      render: (data) =><span>{data.houseDetails.yearBuilt}</span> ,
      key: 'houseDetails.yearBuilt',
      width:150,
    },
    {
      title: "Email",
      render: (data) =><span>{data.user.email}</span> ,
      key: 'email',
    },
    {
      title: "Price",
      key: 'price',
      render: (data) =><span>$ {data.salePrice}</span> ,
      width:150,
    },
    {
      title: "Action",
      render: data => {
        return (
          <User>
            <Icons.Edit onClick={(event)=> {
              event.stopPropagation()
              navigate(`/myprofile/edithouse/${data?.id}`)
              }}/> 
            <Icons.Delete onClick={(event)=>{
              event.stopPropagation()
              onDelete(data?.id)
              }}/>
            </User>
        )
      },
      width: 100,
      key: 'email',
    },
  ]

  

  return (
    <Wrapper>
      <User>
        <div
          className="title"
          style={{ marginBottom: "10px", textAlign: "start" }}
        >
          My properties
        </div>
        <div
          className="title"
          style={{ marginBottom: "10px", marginLeft: "auto" }}
        >
          <Button onClick={()=> navigate('/myprofile/newhouse')}>Add House</Button>
        </div>
      </User>

      <Container>
        <AntTable onRow={(record,rowIndex) => {
          return {
            onClick: () => {
              navigate(`/properties/${record?.id}`)
            }
          }
        }} dataSource={data} columns={columns} />
      </Container>
    </Wrapper>
  );
}
export default MyProfile