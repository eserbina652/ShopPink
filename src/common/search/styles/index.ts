import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const InputSearch = styled.input`
  background: none;
  border: none;
  font-size: 20px;
  max-height: 30px;
  padding: 0;
  border-bottom: deeppink 2px solid;
  &:focus {
    outline: none;
  }
`;

export const ImageSearch = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -20px;
`;
