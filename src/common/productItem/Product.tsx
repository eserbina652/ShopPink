import React from "react";
import { Product } from "../../api/productApi/types/productTypes";
import { useNavigate } from "react-router-dom";
import { Elements, ElementSContainer } from "./styles";
import { RegistrationsButton } from "../../screens/Registration/styles/loginStyles";

interface IProduct {
  product: Product;
}

export default ({ product }: IProduct) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/productPage", { state: product });
  };
  return (
    <>
      <ElementSContainer>
        <Elements>
          <img src={product.images[0]} alt={product.title} width="50%" />
          <p>{product.title}</p>
          <RegistrationsButton onClick={handleNav} isRegistration={true}>
            See More
          </RegistrationsButton>
        </Elements>
      </ElementSContainer>
    </>
  );
};
