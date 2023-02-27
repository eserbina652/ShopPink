import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Products } from "../api/productApi/types/productTypes";
import ProductApi from "../api/productApi/ProductApi";
import Product from "../common/productItem/Product";
import { CategoryListWrap } from "../screens/categoryList/styles";

const CategoryList = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState<Products>();
  const getData = async () => {
    try {
      const res = await ProductApi.getCurrentCategory(state);
      setProducts(res);
    } catch (e) {
      console.log("CategoryListErr", e);
    }
  };

  useEffect(() => {
    void getData();
  }, [state]);
  return (
    <CategoryListWrap>
      {products?.products.map((product) => (
        <Product product={product} />
      ))}
    </CategoryListWrap>
  );
};

export default CategoryList;
