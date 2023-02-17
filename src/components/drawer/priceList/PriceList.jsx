import React from "react";

const PriceList = ({items}) => {
  return (
    <ul className="drawer__price-list flex flex-col gap-5 mb-7">
      {items.map(item => (
        <li className="drawer__price-list-item" key={item.id}>
          <span className="drawer__price-list-descr">{item.descr}</span>
          <span className="drawer__price-list-dash"></span>
          <span className="drawer__price-list-price">{item.price} $</span>
        </li>
      ))}
    </ul>
  );
};

export default PriceList;
