import styled from "styled-components";

export const PopupsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.77);
  margin: -30px 0 0 -8px;
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
`;

export const PopupWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh 2vw 3vh 2vw;
  width: 50%;
  background-color: #fff6f6;
  border: 0.1rem solid black;
  border-radius: 2vh;
  box-shadow: 5px 5px 10px 1px rgba(252, 174, 216, 0.49);
`;

export const CloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 25px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: deeppink;
`;

export const ButtonsWrap = styled.div<{ isCenter?: boolean }>`
  display: inherit;
  position: relative;
  justify-content: ${(props) => (props.isCenter ? "center" : "flex-end")};
`;

export const YOrNButton = styled.button`
  background-color: pink;
  border: deeppink 1px solid;
  box-shadow: 5px 5px 10px 1px rgba(255, 20, 147, 0.49);
  font-size: 30px;
  margin: 30px;
  cursor: pointer;
  &:hover {
    background-color: deeppink;
    border: pink 1px solid;
    color: white;
    box-shadow: none;
  }
`;
