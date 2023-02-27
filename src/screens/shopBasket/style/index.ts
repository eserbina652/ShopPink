import styled from "styled-components";

export const WrapForPrise = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row-reverse;
  right: 20px;
  top: 140px;
  justify-items: flex-end;
`;

export const PriseForAll = styled.p`
  border-radius: 20px;
  word-spacing: 4px;
  padding: 15px 15px 15px 15px;
  background-color: rgba(255, 20, 147, 0.53);
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const AllBasketWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1vw;
  grid-column-gap: 0;
  margin: 0.5vw;
  position: relative;
  max-width: 100%;
  justify-items: center;
  top: 5vw;
  height: 100%;
  @media (max-width: 1024px) {
    top: 10vw;
  }
`;
export const BasketProductWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: deeppink 2px solid;
  box-shadow: 10px 10px 10px 1px rgba(255, 20, 147, 0.49);
  border-radius: 20px;
  padding: 1vw;
  min-width: 20vw;
  max-width: 20vw;
  justify-content: space-between;
`;

export const Text = styled.p<{ isHeader?: boolean; isBackground?: boolean }>`
  position: relative;
  text-align: center;
  font-size: ${(props) => (props.isHeader ? "25px" : "20px")};
  background-color: ${(props) => (props.isBackground ? "deeppink" : "none")};
  color: ${(props) => (props.isBackground ? "white" : "black")};
  padding: 1vw;
  border-radius: 20px;
  height: 1vw;
  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 2vw;
  }
`;

export const BasketGroupWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const BasketImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export const BasketImg = styled.img`
  min-width: 10vw;
  max-width: 10vw;
  border-radius: 20px;
`;

export const ChangeAmountButton = styled.button`
  background-color: pink;
  font-size: 20px;
  color: black;
  border: deeppink 2px solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: deeppink;
    border: white 2px solid;
  }
`;
