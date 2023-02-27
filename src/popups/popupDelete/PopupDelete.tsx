import React from "react";
import {
  ButtonsWrap,
  CloseButton,
  PopupsWrapper,
  PopupWindow,
  YOrNButton,
} from "../style";
import { Text } from "../../screens/shopBasket/style";
import { onCloseDelete } from "../../store/reducers/popups";
import { onDeleteEl } from "../../store/reducers/basket";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const PopupDelete = () => {
  const dispatch = useDispatch();
  const deletedId = useTypedSelector((state) => state.popups.deletedId);
  const closePopupDelete = () => {
    dispatch(onCloseDelete());
  };

  const yesButtonDelete = () => {
    dispatch(onCloseDelete());
    dispatch(onDeleteEl(deletedId));
  };

  const noButtonDelete = () => {
    dispatch(onCloseDelete());
  };
  return (
    <>
      <PopupsWrapper>
        <PopupWindow>
          <ButtonsWrap isCenter={false}>
            <CloseButton onClick={() => closePopupDelete()}>x</CloseButton>
          </ButtonsWrap>
          <div className="middle-text">
            <Text isHeader={false} isBackground={false}>
              Do you really want to delete this product?
            </Text>
          </div>
          <ButtonsWrap isCenter={true}>
            <YOrNButton onClick={yesButtonDelete}>Yes</YOrNButton>
            <YOrNButton onClick={noButtonDelete}>No</YOrNButton>
          </ButtonsWrap>
        </PopupWindow>
      </PopupsWrapper>
    </>
  );
};

export default PopupDelete;
