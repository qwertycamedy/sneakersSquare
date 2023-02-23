import React, { useContext } from "react";
import Cards from "../components/cards/Cards";
import emptyImg from "../assets/img/empty.png";
import { Link } from "react-router-dom";
import MyBtnSquare from "../UI/btn-square/MyBtnSquare";
import { SlArrowLeft } from "react-icons/sl";
import AppContext from "../context";
import Info from "../components/info/Info";

const Orders = ({ searchValue, isLoading }) => {
  const { orders, cartCards } = useContext(AppContext);

//   const order = orders.map(order => order.cards).flat();
  const order = orders.reduce((prev, obj) => [...prev, ...obj.cards], []);

  return (
    <div className="favorites">
      <div className="container__inner">
        <div className="favorites__inner">
          {
          order.length > 0 ? (
            <>
              <div className="flex gap-6 items-center mb-10">
                <Link to="/">
                  <MyBtnSquare>
                    <SlArrowLeft />
                  </MyBtnSquare>
                </Link>
                <h1 className="title-section">Orders</h1>
              </div>
              <Cards
                cards={order}
                cartCards={cartCards}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            </>
          ) : (
            <Info
              img={emptyImg}
              title="No orders :("
              subtitle="You didn't buy anything."
            />
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Orders;
