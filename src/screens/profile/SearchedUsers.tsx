import React from "react";
import {
  SearchedImage,
  SearchedImageWrap,
  SearchedProductWrap,
  SearchedText,
  SingleSearchedProduct,
} from "../../common/search/searchedProduct/styles";
import { useNavigate } from "react-router-dom";

const SearchedUsers = ({ user, onSelect }: any) => {
  const navigate = useNavigate();
  console.log("user", user);
  const handleNav = () => {
    navigate("/friend", { state: user });
    onSelect();
  };
  return (
    <>
      <SearchedProductWrap>
        <SingleSearchedProduct>
          <SearchedImageWrap>
            <SearchedImage onClick={handleNav} src={user.image} />
          </SearchedImageWrap>
          <SearchedText>{user.username}</SearchedText>
        </SingleSearchedProduct>
      </SearchedProductWrap>
    </>
  );
};

export default SearchedUsers;
