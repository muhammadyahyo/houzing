import React from "react";
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import {Container, Link, Logo, Section, Wrapper} from "./style";
import {navbar} from "../../utils/navbar";


export const Navbar =()=>{
    const navigate = useNavigate(0)
    return (
      <Container>
        <Wrapper>
          <Section logo={'true'} onClick={() => navigate("/home")} >
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path}, index) => {
              return (
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
            <button>Sign In</button>
          </Section>
        </Wrapper>
        <Outlet />
      </Container>
    );
}

export default Navbar