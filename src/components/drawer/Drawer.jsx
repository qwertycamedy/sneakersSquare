import React from "react";
import MyBtn from "../../UI/btn/MyBtn";
import DrawerCards from "./cards/DrawerCards";
import PriceList from "./priceList/PriceList";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import { IoClose } from "react-icons/io5";
import emptyImg from "../../assets/img/empty.png";

const Drawer = ({ cards, cartPrices, opened, onHide, onRemove }) => {
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
        {cards.length > 0 ? (
          <>
            <DrawerCards cards={cards} onRemove={onRemove} />
            <div className="grow-0 w-full mt-auto">
              <PriceList items={cartPrices} />
              <MyBtn classNames="drawer__btn">
                Place an order
                <BsArrowRightShort />
              </MyBtn>
            </div>
          </>
        ) : (
          <>
            <div className="empty">
              <img className="empty__img mb-5" src={emptyImg} alt="empty" />
              <div className="empty__title mb-2">Корзина пустая</div>
              <div className="empty__subtitle mb-10">
                Add at least one pair of sneakers to order.
              </div>
              <MyBtn classNames="empty__btn w-full" onClick={onHide}>
                <BsArrowLeftShort />
                Go back
              </MyBtn>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
