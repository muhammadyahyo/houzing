import React , { useState}from 'react'
import {  Container, Content } from './style'
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "../Generic";
import {useRequest} from '../../hooks/useRequest'
import {  message } from 'antd';

export const Recent = () => {
    const request = useRequest() 
    const [body, setBody] = useState({})
    const navigate = useNavigate()


    const info = () => {
      message.info('Successfully logged in');
    };
    // const warning = () => {
    //   message.warning('Login yoki Email xato');
    // };
    
   

    const onChange =({target: {value, placeholder}})=>{
      setBody({
        ...body,
        [placeholder]: value
      });
    };

    const onSubmit =async()=>{
      console.log(body);
      request({ url: `/public/auth/login`, method: "POST", body, me:true })
      .then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info()
      });
      // fetch(`http://localhost:8081/api/public/auth/login`,{
      //   method:"POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(body)
      // })
      // .then((res)=> res.json())
      // .then((res) => {
      //   if(res?.authenticationToken){
      //     navigate('/home')
      //     info()
      //     localStorage.setItem('token',res?.authenticationToken)
      //   } else{
      //     warning()
      //   }
      // })
    }

  
    
  return (
    <Container>
     <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder='email' type='email'/>
        <Input onChange={onChange} placeholder='password' type='password'/>
        <Button onClick={onSubmit} width={'100%'}>Login</Button>
      </Content>  
    </Container>
  )
}

export default Recent

