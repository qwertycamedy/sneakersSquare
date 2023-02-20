import React from "react";
import ContentLoader from "react-content-loader";
import { AiOutlineCheck, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import MyBtnSquare from "../../../UI/btn-square/MyBtnSquare";
import cl from "./Card.module.scss";

const Card = ({ card, isLoading, addToCart, addToFav }) => {
  const onFavClick = () => {
    addToFav(card);
  };
  const onCartClick = () => {
    addToCart(card);
  };
  return (
    <div className={cl.card + " " + card.classNames}>
      {isLoading ? (
        <ContentLoader
          speed={1.5}
          width={150}
          height={180}
          viewBox="0 0 150 180"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="105" rx="4" ry="4" width="150" height="15" />
          <rect x="0" y="125" rx="4" ry="4" width="120" height="15" />
          <rect x="118" y="145" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="155" rx="4" ry="4" width="80" height="22" />
        </ContentLoader>
      ) : (
        <>
          <MyBtnSquare
            classNames={!card.isLiked ? cl.like : cl.like + " " + cl.liked}
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
        </>
      )}
    </div>
  );
};

export default Card;
