import React from "react";
import { Blur, Container, Content, Img } from "./style";
import category from "../../assets/img/category.png";

export const CategoryCard = ({onClick, data = {} }) => {
  const {
   name
  } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category} />{" "}
      {/* attachments[0]?.imgPath || */}
      <Blur/>
      <Content>
        {name || "Category Name"}
      </Content>
    </Container>
  );
};

export default CategoryCard;
