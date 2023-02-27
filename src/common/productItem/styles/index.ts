import styled from "styled-components";

export const ElementSContainer = styled.div`
  display: inherit;
  position: relative;
  width: 20vw;
  height: 30vh;
  border: 3px solid deeppink;
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
  box-shadow: 10px 10px 10px 1px rgba(255, 20, 147, 0.49);
  margin: 10px;
`;

export const Elements = styled.div`
  display: inherit;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: deeppink;
  width: 20vw;
  & img {
    max-width: 8vw;
    max-height: 20vh;
  }
`;
