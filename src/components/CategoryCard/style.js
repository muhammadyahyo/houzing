import styled from "styled-components";

const Container = styled.div`
  border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 220px;
  height: fit-content;
`;
// const Content = styled.div`
//   display: flex;
//   flex-direction: ${({ footer }) => (footer ? "row" : "column")};
//   justify-content: ${({ footer }) => footer && "space-between"};
//   padding-top: 24px;
//   padding: 11.5px 20px;
//   background: #ffffff;
// `;

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

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: white;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);

  border-radius: 3px;
`;

const Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };
