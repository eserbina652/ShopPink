import styled from "styled-components";

export const AllProductWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 7vh 5vw 2vh 5vw;
  grid-gap: 2vw;
  align-items: normal;
`;

export const ProductWrap = styled.div<{ isCounter?: boolean }>`
  font-size: 20px;
  border: 3px solid deeppink;
  border-radius: 20px;
  padding: 2vw;
  box-shadow: 10px 10px 10px 1px rgba(255, 20, 147, 0.49);
  align-items: center;
  &.counter {
    display: flex;
    flex-direction: row;
    justify-self: center;
  }
  &.firstCategory {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    border: none;
    border-radius: 0;
    background-color: hotpink;
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 1vh 5vw 1vh 5vw;
  }
  &.firstDescription {
    color: white;
    border-radius: 0;
    background-color: hotpink;
    border: none;
    grid-column: 1/3;
    grid-row: 3/4;
    text-align: center;
  }
  &.second {
    display: flex;
    grid-column: 1/3;
    grid-row: 2/3;
    align-items: center;
    padding: 0;
    margin: 0 7vw 0 5vw;
    max-width: 60vw;
    max-height: 60vh;
    @media (max-width: 1024px) {
      min-width: 60vw;
      max-width: 60vw;
      max-height: 40vh;
      margin: 0 2vw 0 1vw;
    }
  }
  &.third {
    grid-column: 3/4;
    grid-row: 2/3;
    margin: 0 0 0 3vw;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    border: 2px solid deeppink;
    padding: 1vw;
  }
`;

export const Image = styled.img`
  max-height: 45vh;
  max-width: 30vw;
  border-radius: 20px;
  margin: 0;
  padding: 0;
  @media (max-width: 1024px) {
    margin: 0 0 0 -3vw;
    max-height: 38vh;
    max-width: 35vw;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  max-height: 50vh;
  min-height: 50vh;
  min-width: 40vw;
  justify-content: center;
  margin: 0;
  padding: 0;
  align-items: center;
`;
