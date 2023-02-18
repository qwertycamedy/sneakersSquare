import React from "react";
import MyBtnSquare from "../../../../UI/btn-square/MyBtnSquare";
import { IoClose } from "react-icons/io5";
import cl from "./DrawerCard.module.scss";

const DrawerCard = ({ card, onRemove }) => {
  return (
    <div className={cl.card}>
      <div className="flex gap-4 items-center">
        <img width={70} height={70} src={card.img} alt={card.title} />
        <div className="flex flex-col gap-2">
          <div className={cl.title}>{card.title}</div>
          <div className={cl.price}>{card.price} $</div>
        </div>
      </div>
      <MyBtnSquare onClick={() => onRemove(card)}>
        <IoClose />
      </MyBtnSquare>
    </div>
  );
};

export default DrawerCard;
