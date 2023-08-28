import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    border-radius: 3px;
    border: 1px solid var(--border, #e6e9ec);
    background: #fff;
    margin-left: 20px;
    padding: 24px;
    gap: 24px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
`;
Content.Title = styled.div`
  width: 100%;
  color: var(--text-1, #0d263b);
  font-family: Montserrat;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
  text-align: start;
  margin-bottom: 8px;
`;

const Icons = styled.div``;
Icons.Title = styled.div`
  color: var(--text-color, #696969);

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

Icons.Share = styled(share)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 11px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 11px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;
Details.Item = styled.div`
  color: var(--text-color, #696969);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin: 0 24px 0 8px;
`;

const Description = styled.div`
  margin-top: 48px;
  /* color: var(--color-1, #0061df); */

  /* Paragraph/Small/Special/Underline */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  /* text-decoration-line: underline; */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  margin-bottom: 48px;
`;
const Hr = styled.hr`
  max-width: 880px;
  height: 1px;
  flex-shrink: 0;
  background: var(--border-color, #e6e9ec);
`;
const Location = styled.div`
  margin-top: 48px;
`;
Location.Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
Location.Title = styled.div`
  display: ${({ flex }) => flex && "flex"};
  align-items: ${({ flex }) => flex && "center"};
  color: var(--color-2, #0d263b);

  /* Paragraph/Small/Semibold */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
`;

const User = styled.div``;
User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;
export {
  Container,
  Content,
  Section,
  Description,
  Icons,
  Details,
  Hr,
  Location,
  Wrapper,
  User,
};
