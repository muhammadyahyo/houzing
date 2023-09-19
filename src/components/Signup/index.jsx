import React , { useState}from 'react'
import {  Content } from './style'
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "../Generic";
import {useRequest} from '../../hooks/useRequest'
import {  message  } from 'antd';

export const Signup = () => {
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
      // request({ url: `/public/auth/register`, method: "POST", body, me:true })
      // .then((res) => {
      //   info()
      //   navigate("/signin");
      //   console.log(res);
      // });
       await fetch(`http://localhost:8081/api/public/auth/register`,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((res)=> res.json())
      .then((res) => {
        info()
        alert(JSON.stringify(res, "email"))
        navigate('/signin')
      })
    }
    
  
    
  return (
   

            <Content>
               <div className="subTitle">Sign up</div>
               <Input onChange={onChange} placeholder='email' type='email'/>
               <Input onChange={onChange} placeholder='firstname' type='text'/>
               <Input onChange={onChange} placeholder='lastname' type='text'/>
               <Input onChange={onChange} placeholder='password' type='password'/>
               <Button onClick={onSubmit} width={'100%'}>Login</Button>
            </Content> 
     
  )
}

export default Signup

