import React from "react";
import {
  SearchedImage,
  SearchedImageWrap,
  SearchedProductWrap,
  SearchedText,
  SingleSearchedProduct,
} from "./styles";
import { useNavigate } from "react-router-dom";

const SearchedProduct = ({ item, onSelect }: any) => {
  const navigate = useNavigate();
  const handleNav = () => {
    onSelect();
    navigate("/productPage", { state: item });
  };
  return (
    <>
      <SearchedProductWrap>
        <SingleSearchedProduct>
          <SearchedImageWrap>
            <SearchedImage onClick={handleNav} src={item.images[0]} />
          </SearchedImageWrap>
          <div>
            <SearchedText>{item.category}</SearchedText>
            <SearchedText>{item.brand}</SearchedText>
            <SearchedText>{item.title}</SearchedText>
            <SearchedText>Product's price: {item.price} $</SearchedText>
          </div>
        </SingleSearchedProduct>
      </SearchedProductWrap>
    </>
  );
};

export default SearchedProduct;
