import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  padding: var(--padding);
  gap: 10px;
  justify-content: space-between; */
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: var(--padding);

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  /* max-width: 1440px;
  width: 100%;
  margin: 0 auto; */
  /* margin-top: 50px; */

  /* display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;

  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 50px; */
`;

export { Container };
