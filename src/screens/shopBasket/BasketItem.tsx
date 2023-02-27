import React from "react";
import {
  BasketGroupWrapper,
  BasketImg,
  BasketImgWrapper,
  BasketProductWrapper,
  ChangeAmountButton,
  Text,
} from "./style";
import { useDispatch } from "react-redux";
import { onDecreace, onIncreace } from "../../store/reducers/basket";
import { onOpenDelete } from "../../store/reducers/popups";

const BasketItem = ({ item }: any) => {
  const dispatch = useDispatch();

  const toIncrease = () => {
    dispatch(onIncreace({ data: item, count: item.count, price: item.price }));
  };
  const toDecrease = () => {
    if (item.count === 1) {
      dispatch(onOpenDelete(item.id));
    } else {
      dispatch(onDecreace({ data: item, count: item.count }));
    }
  };
  return (
    <BasketProductWrapper>
      <BasketImgWrapper>
        <BasketImg src={item.images[0]} alt={`${item.title} picture`} />
      </BasketImgWrapper>
      <Text isHeader={true}>{item.title}</Text>
      <BasketGroupWrapper>
        <ChangeAmountButton onClick={toDecrease}>-</ChangeAmountButton>
        <Text isHeader={false}>Amount {item.count}</Text>
        <ChangeAmountButton onClick={toIncrease}>+</ChangeAmountButton>
      </BasketGroupWrapper>
      <Text isBackground={true}>Price: {item.price}$</Text>
    </BasketProductWrapper>
  );
};

export default BasketItem;
