import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 429px;
  height: 100%;
  /* margin: ${({ gap }) => gap && `0 ${gap}px`}; */
  background: white;
  border: 1px solid #e6e9ec;

  &:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;

  /* border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff); */
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 11.5px 20px;
  background: #ffffff;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
Details.Item = styled.div`
  display: flex;
  align-items: ${({ footer }) => !footer && "center"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Resize = styled(resize)``;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Divider };
