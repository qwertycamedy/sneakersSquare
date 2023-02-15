import React from "react";
import { AiOutlineCheck, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import MyBtnSquare from "../../../UI/btn-square/MyBtnSquare";
import cl from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <div className={cl.card + " " + card.classNames}>
      <MyBtnSquare classNames={!card.isLiked ? cl.like : cl.like + ' ' + cl.liked}>
        <AiOutlineHeart />
      </MyBtnSquare>
      <img className={cl.img} width={133} height={112} src={card.img} alt={card.title} />
      <h5 className={cl.title}>
        {card.title}
      </h5>
      <div className="flex items-center justify-between w-full">
        <div className={cl.price}>
          <span>цена:</span>
          <span>{card.price} $</span>
        </div>
        <MyBtnSquare classNames={!card.isAdded ? cl.add : cl.add + ' ' + cl.added}>
          {!card.isAdded ? <AiOutlinePlus /> : <AiOutlineCheck />}
        </MyBtnSquare>
      </div>
    </div>
  );
};

export default Card;
