import styled from "styled-components";

const Container = styled.div`
  position: relative;
  /* height: 571px; */
  height: fit-content;
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

Content.Title = styled.h1`
  color: #fff;
  text-align: center;

  /* Heading/H4/Semibold/Desktop */
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.56px;
  width: 576px;
`;

export { Container, Img, Blur, Content };
