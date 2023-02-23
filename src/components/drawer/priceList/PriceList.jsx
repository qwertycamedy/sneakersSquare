import React from "react";

const PriceList = ({ totalPrice }) => {
  return (
    <ul className="drawer__price-list flex flex-col gap-5 mb-7">
      <li className="drawer__price-list-item">
        <span className="drawer__price-list-descr">Total:</span>
        <span className="drawer__price-list-dash"></span>
        <span className="drawer__price-list-price">{totalPrice} $</span>
      </li>
      <li className="drawer__price-list-item">
        <span className="drawer__price-list-descr">Tax 5%:</span>
        <span className="drawer__price-list-dash"></span>
        <span className="drawer__price-list-price">{totalPrice / 100 * 5} $</span>
      </li>
    </ul>
  );
};

export default PriceList;
