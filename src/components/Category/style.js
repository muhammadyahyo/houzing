import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  /* opacity: 0.2; */
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 48px;

  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #ffffff;
  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };
