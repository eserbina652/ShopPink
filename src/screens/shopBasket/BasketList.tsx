import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BasketItem from "./BasketItem";
import { useDispatch } from "react-redux";
import { onSave } from "../../store/reducers/basket";
import { AllBasketWrapper, PriseForAll, Text, WrapForPrise } from "./style";

const BasketList = () => {
  const user = useTypedSelector((state) => state.auth.user);
  const basketList = useTypedSelector((store) => store.basket.basketList);
  const dispatch = useDispatch();
  const [prise, setPrise] = useState(0);
  useEffect(() => {
    const storage = localStorage.getItem("basketList");
    if (storage) {
      dispatch(onSave(JSON.parse(storage)));
    }
  }, []);

  useEffect(() => {
    const temp = basketList.reduce((prev, next) => {
      return prev + next.price * next.count;
    }, 0);
    setPrise(temp);
    if (basketList[0]?.id !== 0) {
      localStorage.setItem("basketList", JSON.stringify(basketList));
    }
  }, [basketList]);

  return (
    <>
      {!!user ? (
        <>
          {basketList.length ? (
            <>
              <AllBasketWrapper>
                {basketList.map((e, index) => {
                  return (
                    <BasketItem item={e} index={index} key={index.toString()} />
                  );
                })}
              </AllBasketWrapper>
              <WrapForPrise>
                <PriseForAll>Prise of all products: {prise} $</PriseForAll>
              </WrapForPrise>
            </>
          ) : (
            <Text isHeader={true} style={{ top: "30vh" }}>
              EMPTY BASKET
            </Text>
          )}
        </>
      ) : (
        <Text>LOADING</Text>
      )}
    </>
  );
};

export default BasketList;
