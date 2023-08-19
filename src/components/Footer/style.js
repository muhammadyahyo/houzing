import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twiter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  max-width: 235px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
Content.Title = styled.div`
  color: var(--color-5, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: var(--color-5, #fff);

  /* Paragraph/Small/Regular */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  align-items: center;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 21px;
  /* width: 24px;
  height: 24px; */
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
`;
Icon.Map = styled(map)`
  margin-right: 21px;
  display: block;
  width: 50px;
  height: 29px;
`;
Icon.Facebook = styled(facebook)`
  margin-top: 22px;
  margin-right: 37px;
`;
Icon.Twitter = styled(twitter)`
  margin-top: 22px;
  margin-right: 37px;
`;
Icon.Instagram = styled(instagram)`
  margin-top: 22px;
  margin-right: 37px;
`;
Icon.Linkedin = styled(linkedin)`
  margin-top: 22px;
  margin-right: 37px;
`;

export { Container, Content, Icon };
