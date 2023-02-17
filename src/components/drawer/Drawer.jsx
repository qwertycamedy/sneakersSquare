import React from "react";
import MyBtn from "../../UI/btn/MyBtn";
import DrawerCards from "./cards/DrawerCards";
import PriceList from "./priceList/PriceList";
import { BsArrowRightShort } from "react-icons/bs";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import { IoClose } from "react-icons/io5";

const Drawer = ({ cards, cartPrices, opened, onHide, removeFromCart }) => {
  return (
    <div
      className={
        opened ? "overlay drawer__overlay active" : "overflay drawer__overlay"
      }
      onClick={onHide}
    >
      <div
        className="drawer"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="flex w-full justify-between items-center">
          <h3 className="drawer__title title-section">Cart</h3>
          <MyBtnIcon classNames="drawer__close" onClick={onHide}>
            <IoClose />
          </MyBtnIcon>
        </div>
        <DrawerCards cards={cards} remove={removeFromCart} />
        <div className="grow-0 w-full mt-auto">
          <PriceList items={cartPrices} />
          <MyBtn classNames="drawer__btn">
            Place an order
            <BsArrowRightShort />
          </MyBtn>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
