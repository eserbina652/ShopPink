import styled from "styled-components";

export const AllSearchedProduct = styled.div<{ isProduct?: boolean }>`
  display: flex;
  position: absolute;
  background-color: #fce1e5;
  flex-direction: column;
  width: ${(props) => (props.isProduct ? "310px" : "260px")};
  top: ${(props) => (props.isProduct ? "135px" : "100px")};
  right: ${(props) => (props.isProduct ? "35vw" : "5vw")};
  max-height: ${(props) => (props.isProduct ? "75vh" : "30vw")};
  overflow-y: scroll;
  border-radius: 20px;
  padding: 5px 0 0 10px;
  z-index: 2;
`;
export const AllSearchedUser = styled(AllSearchedProduct)``;

export const SearchedProductWrap = styled.div`
  border-bottom: white 1px solid;
  margin: 20px;
`;

export const SingleSearchedProduct = styled.div`
  display: flex;
`;

export const SearchedText = styled.p`
  font-size: 15px;
  padding: 0 10px 0 10px;
  line-height: 15px;
`;

export const SearchedImage = styled.img`
  max-height: 100px;
  padding: 5px;
  max-width: 100%;
  border: 1px deeppink solid;
  border-radius: 20px;
`;

export const SearchedImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 0 5px;
  width: 150px;
  height: 100px;
`;
