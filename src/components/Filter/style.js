import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
  margin-top: 5px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  max-width: 200px;
  width: 100%;
  /* height: 44px !important; */
  .ant-select-selector {
    height: 44px !important;
    display: flex;
    align-items: center;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
