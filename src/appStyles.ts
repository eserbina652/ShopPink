import styled from "styled-components";

export const AllPagesWrapper = styled.div<{ isLogined: boolean }>`
  display: grid;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #fff6f6;
  grid-template-columns: 1fr;
  //min-height: 100px;
`;
export const Header = styled.div`
  display: flex;
  position: sticky;
  padding: 35px;
  background-color: #fce1e5;
  top: 0;
  justify-content: space-around;
  z-index: 2;
  box-shadow: 10px 10px 10px 1px rgba(255, 20, 147, 0.49);
`;

export const HeaderLinks = styled.div<{ isActive?: boolean; isBold?: boolean }>`
  display: inherit;
  position: relative;
  align-items: center;
  font-size: 25px;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  color: deeppink;
  border: ${(props) =>
    props.isActive ? "rgba(255, 20, 147, 0.49) 2px solid" : "none"};
  border-radius: 10px;
  padding: 5px;
  & a {
    text-decoration: none;
    color: deeppink;
  }
`;
