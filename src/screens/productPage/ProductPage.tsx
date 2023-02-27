import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CategoryListWrap } from "../categoryList/styles";
import { AllProductWrap, Image, ImageWrap, ProductWrap } from "./styles";
import { RegistrationsButton } from "../Registration/styles/loginStyles";
import { onAdd, onIncreace, onSave } from "../../store/reducers/basket";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ProductPage = () => {
  const { state: product } = useLocation();
  const [count, setCount] = useState(0);
  const basketList = useTypedSelector((state) => state.basket.basketList);

  const dispatch = useDispatch();
  const increase = () => {
    if (count < product.images.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const decrease = () => {
    if (count <= product.images.length - 1) {
      setCount(count - 1);
    }
    if (count <= 0) {
      setCount(0);
    }
  };
  const toAdd = () => {
    const currentEl = basketList.find((el) => el.id === product.id);
    if (currentEl) {
      dispatch(onIncreace({ data: currentEl, count: currentEl.count }));
    } else {
      dispatch(onAdd(product));
    }
  };

  return (
    <>
      <AllProductWrap>
        <ProductWrap className="firstCategory">
          <p>Category: {product.category}</p>
          <p>Brand name: {product.brand}</p>
        </ProductWrap>
        <ProductWrap className="firstDescription">
          '{product.description}'
        </ProductWrap>
        <ProductWrap className="second counter">
          <RegistrationsButton
            id="prev"
            isRegistration={false}
            onClick={decrease}
          >
            previous
          </RegistrationsButton>
          <ImageWrap>
            <Image
              className="img"
              src={product.images[count]}
              alt={product.title}
            />
          </ImageWrap>
          <RegistrationsButton id="next" onClick={increase}>
            next
          </RegistrationsButton>
        </ProductWrap>
        <ProductWrap className="third">
          <p>Product Description:</p>
          <p>Company name: {product.brand}</p>
          <p>Product name: {product.title}</p>
          <p>Rating: {product.rating}</p>
          <p>Count: {product.stock}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Price with discount: {product.price}$</p>
        </ProductWrap>
        <RegistrationsButton
          onClick={toAdd}
          className="fourth"
          id="buy"
          isRegistration={true}
        >
          {/*how to change the color of button when user is bought some product?*/}
          Buy
        </RegistrationsButton>
      </AllProductWrap>
    </>
  );
};

export default ProductPage;
