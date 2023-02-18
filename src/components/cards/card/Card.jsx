import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import MyBtnSquare from "../../../UI/btn-square/MyBtnSquare";
import cl from "./Card.module.scss";

const Card = ({ card, addToCart }) => {
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onFavClick = () => {
    setIsAddedToFavorite(!isAddedToFavorite);
  }
  const onCartClick = () => {
    addToCart(card);
    setIsAddedToCart(!isAddedToCart);
  }
  return (
    <div className={cl.card + " " + card.classNames}>
      <MyBtnSquare
        classNames={!isAddedToFavorite ? cl.like : cl.like + " " + cl.liked}
        onClick={onFavClick}
      >
        <AiOutlineHeart />
      </MyBtnSquare>
      <img
        className={cl.img}
        width={133}
        height={112}
        src={card.img}
        alt={card.title}
      />
      <h5 className={cl.title}>{card.title}</h5>
      <div className="flex items-center justify-between w-full">
        <div className={cl.price}>
          <span>цена:</span>
          <span>{card.price} $</span>
        </div>
        <MyBtnSquare
          classNames={!card.isAdded ? cl.add : cl.add + " " + cl.added}
          onClick={onCartClick}
        >
          {!card.isAdded ? <AiOutlinePlus /> : <AiOutlineCheck />}
        </MyBtnSquare>
      </div>
    </div>
  );
};

export default Card;
