import React from "react";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-self: center;
  justify-self: center;
`;
export const ErrorText = styled.p`
  color: deeppink;
  font-size: 20px;
  margin: 5px;
`;

export const Form = styled.form`
  display: inherit;
  position: inherit;
  flex-direction: column;
  border: 2px deeppink solid;
  background-color: snow;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 10px 10px 10px 1px rgba(255, 20, 147, 0.49);
`;
export const Inputs = styled.input.attrs({ type: "text" })`
  background: #eaeaea;
  color: deeppink;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 0;
  min-width: 20vw;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  height: 35px;
  border-color: white;
  outline-color: hotpink;
  text-align: center;
`;

export const RegistrationsButton = styled.button<{ isRegistration?: boolean }>`
  display: inherit;
  position: inherit;
  justify-content: center;
  margin: ${(props) => (props.isRegistration ? "20px 10px 0 10px" : "0")};
  font-size: 20px;
  background-color: pink;
  color: white;
  width: ${(props) => (props.isRegistration ? "auto" : "150px")};
  height: ${(props) => (props.isRegistration ? "auto" : "50px")};
  border: deeppink 2px solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: deeppink;
    border: white 2px solid;
  }
  &.fourth {
    height: 50px;
    grid-column: 3/4;
    grid-row: 3/4;
  }
  &#prev {
    @media (max-width: 1024px) {
      width: 100px;
    }
  }
  &#next {
    @media (max-width: 1024px) {
      width: 80px;
    }
  }
`;
