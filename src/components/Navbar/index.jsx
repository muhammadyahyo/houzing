import React from "react";
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import {Container, Link, Logo, Main, Section, Wrapper} from "./style";
import {navbar} from "../../utils/navbar";
import Button from "../Generic/Button";


export const Navbar =()=>{
    const navigate = useNavigate(0)
    return (
      <Container>
        <Main>
          <Wrapper>
            <Section logo={'true'} onClick={() => navigate("/home")} >
              <Logo /> <h3>Houzing</h3>
            </Section>
            <Section>
              {navbar.map(({ title, path, hidden}, index) => {
                return !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                );
              })}
            </Section>
            <Section>
              <Button onClick={()=> navigate('/signin')} type='dark'>Sign In</Button>
            </Section>
          </Wrapper> 
        </Main>
        <Outlet />
      </Container>
    );
}

export default Navbar