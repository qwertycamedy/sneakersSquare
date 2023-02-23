import React, { useContext, useState } from "react";
import MyBtn from "../../UI/btn/MyBtn";
import DrawerCards from "./cards/DrawerCards";
import PriceList from "./priceList/PriceList";
import { BsArrowRightShort } from "react-icons/bs";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import { IoClose } from "react-icons/io5";
import emptyImg from "../../assets/img/empty.png";
import successImg from "../../assets/img/success.png";
import Info from "../info/Info";
import AppContext from "../../context";

const Drawer = ({ cards, opened, onHide, onRemove }) => {
  const [orderId, setOrderId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    setCartCards,
    isOrderComplete,
    setIsOrderComplete,
    setOrders,
    totalPrice
  } = useContext(AppContext);

  const onClickOrder = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOrderComplete(true);
      setCartCards([]);
      setIsLoading(false);
    }, 1000);
    setOrderId(orderId + 1);
    setOrders(prev => [
      ...prev,
      {
        id: orderId,
        cards,
      },
    ]);
  };

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
              <PriceList totalPrice={totalPrice} />
              <MyBtn classNames={`${!isLoading ? 'drawer__btn' : 'drawer__btn disabled'}`} onClick={onClickOrder}>
                Place an order
                <BsArrowRightShort />
              </MyBtn>
            </div>
          </>
        ) : (
          <>
            {isOrderComplete ? (
              <Info
                classNames="success"
                img={successImg}
                title="Order up!"
                subtitle={`Your order #${orderId} will soon be transferred to courier delivery`}
                onHide={onHide}
                isLoading={isLoading}
              />
            ) : (
              <Info
                img={emptyImg}
                title="Cart is empty"
                subtitle="Add at least one pair of sneakers to order."
                onHide={onHide}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
