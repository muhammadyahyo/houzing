import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  Container, Content, Description, Details, Hr, Icons, Location, Section, User, Wrapper } from './style'
import { Input, Button, Yandex } from "../Generic";
import { Checkbox } from 'antd';
import nouser from "../../assets/img/nouser.jpeg";
import Recent from "../Recent";

const {REACT_APP_BASE_URL: url, REACT_APP_CLIENT_TOKEN: token} = process.env

export const HouseItem = () => {
   const [data, setData] = useState({})
   const params = useParams()
   
   console.log(params, 'params');


   useEffect(()=>{
    params?.id && fetch(`${url}/houses/id/${params?.id}`,{
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${token}`,
    }
    })
    .then((res) => res.json())
    .then((res) => {
      setData(res?.data || {})
      window.scrollTo(0,0)
    })
   },[params?.id])
console.log(data);
  // useEffect(()=>{
  //   request({url: `/houses/id/${params?.id}`}).then((res)=> setData(res?.data || []))
  // },[params?.id])
  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large={"true"}>{data?.name}</Content.Title>
              <div className="info">
                {data?.city} {data?.address} {data?.country}
              </div>
            </Content>
            <Content flex={"true"}>
              <Icons.Share />
              <Icons.Title>Share</Icons.Title>
              <Icons.Love />
              <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Item>{data?.houseDetails?.beds || 0} Beds</Details.Item>
              <Icons.Bath />
              <Details.Item>{data?.houseDetails?.bath || 0} Bath</Details.Item>
              <Icons.Garage />
              <Details.Item>
                {data?.houseDetails?.garage || 0} Garage
              </Details.Item>
              <Icons.Ruler />
              <Details.Item>{data?.houseDetails?.area || 0} Sq Ft</Details.Item>
              <Icons.Calendar />
              <Details.Item>
                Year Built: {data?.houseDetails?.yearBuilt || null}
              </Details.Item>
            </Details>
            <Content>
              <Content flex={"true"}>
                <del className="info">${data?.price || 0}/mo</del>
                <h2
                  className="title"
                  style={{
                    fontSize: "24px",
                    marginBottom: "0",
                    marginLeft: "8px",
                  }}
                >
                  ${data?.salePrice || 2800}/mo
                </h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                Est.{data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Description>
            <Content.Title>Description</Content.Title>
            {data?.description}
          </Description>
          <Hr />
          <Location>
            <Content.Title>Location</Content.Title>

            <Location.Div>
              <div>
                <Location.Title flex={"true"}>
                  Address:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.address}
                  </h3>
                </Location.Title>

                <Location.Title flex={"true"}>
                  State/County:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.country}
                  </h3>
                </Location.Title>
              </div>

              <div>
                <Location.Title flex={"true"}>
                  City:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.city}
                  </h3>
                </Location.Title>

                <Location.Title flex={"true"}>
                  Zip:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.zipCode}
                  </h3>
                </Location.Title>
              </div>

              <div>
                <Location.Title flex={"true"}>
                  Area:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.address}
                  </h3>
                </Location.Title>

                <Location.Title flex={"true"}>
                  Country:
                  <h3
                    className="info"
                    style={{ marginBottom: "0", marginLeft: "8px" }}
                  >
                    {data?.country}
                  </h3>
                </Location.Title>
              </div>
            </Location.Div>
          </Location>
        </Container>
        <Container flex={1} className={"user"}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} />
            <Content>
              <div className="subTitle">Muhammad Yahyo</div>
              <div className="info">+99890 175 88 24</div>
            </Content>
          </Section>
          <Input placeholder={"Name"} />
          <Input placeholder={"Phone"} />
          <Input placeholder={"Email"} />
          <Input placeholder={"Message"} />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Wrapper>
        <Content.Title>
          Location for Yandex maps:
          <Yandex
            center={[data?.location?.latitude, data?.location?.longitude]}
          />
        </Content.Title>
      </Wrapper>
      <Wrapper>
        <Content.Title>Feature</Content.Title>
      </Wrapper>
      <Wrapper>
          <Section style={{width: '100%'}}>
            <Section>
              <Container gap={25}>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Garage />
                  <Details.Item>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Ruler />
                  <Details.Item>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
              </Container>
            </Section>
            <Section>
            <Container gap={25}>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Garage />
                  <Details.Item>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Ruler />
                  <Details.Item>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
              </Container>
            </Section>
            <Section>
            <Container gap={25}>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Garage />
                  <Details.Item>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Ruler />
                  <Details.Item>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
              </Container>
            </Section>
            <Section>
            <Container gap={25}>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Garage />
                  <Details.Item>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Bed />
                  <Details.Item>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
                <Content flex={'true'}>
                  <Icons.Ruler />
                  <Details.Item>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Item>
                </Content>
              </Container>
            </Section>
          </Section>
      </Wrapper>
      <Recent />
    </React.Fragment>
  );
}

export default HouseItem

