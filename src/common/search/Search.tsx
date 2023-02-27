import React, { useEffect, useState } from "react";
import { ImageSearch, InputSearch, SearchWrap } from "./styles";
import { search } from "../../assets";
import ProductApi from "../../api/productApi/ProductApi";
import { Products } from "../../api/productApi/types/productTypes";
import { Nullable } from "../../utils/types";
import SearchedProduct from "./searchedProduct/SearchedProduct";
import { AllSearchedProduct } from "./searchedProduct/styles";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const [searchedProduct, setSearchedProduct] = useState<Nullable<Products>>();

  const [productList, setProductList] = useState(false);

  const onClose = () => {
    setSearchText("");
  };

  useEffect(() => {
    if (searchText) {
      setProductList(true);
    } else {
      setProductList(false);
    }
  }, [searchText.length]);
  const searchProduct = async (text: string) => {
    try {
      const res = await ProductApi.getSearchedProduct(text);
      setSearchedProduct(res);
    } catch (e) {
      console.log("searchERR", e);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      void searchProduct(searchText);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchText]);
  return (
    <>
      <SearchWrap>
        <InputSearch
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <ImageSearch src={search} />
      </SearchWrap>
      {productList && (
        <AllSearchedProduct isProduct={true}>
          {searchText &&
            searchedProduct?.products.map((el, index) => {
              //@ts-ignore
              return (
                <SearchedProduct
                  onSelect={onClose}
                  item={el}
                  index={index}
                  key={index.toString()}
                />
              );
            })}
        </AllSearchedProduct>
      )}
    </>
  );
};

export default Search;
