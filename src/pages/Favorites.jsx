import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Cards from "../components/cards/Cards";
import MyBtn from "../UI/btn/MyBtn";
import emptyImg from "../assets/img/empty.png";
import { Link } from "react-router-dom";
import MyBtnSquare from "../UI/btn-square/MyBtnSquare";
import { SlArrowLeft } from "react-icons/sl";

const Favorites = ({
  cards,
  cartCards,
  addToCart,
  addToFav,
  searchValue,
  isLoading,
}) => {
  return (
    <div className="favorites">
      <div className="container__inner">
        <div className="favorites__inner">
          {cards.length > 0 ? (
            <>
              <div className="flex gap-6 items-center mb-10">
                <Link to="/">
                  <MyBtnSquare>
                    <SlArrowLeft />
                  </MyBtnSquare>
                </Link>
                <h1 className="title-section">Favorites</h1>
              </div>
              <Cards
                cards={cards}
                cartCards={cartCards}
                addToCart={addToCart}
                addToFav={addToFav}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            </>
          ) : (
            <div className="empty">
              <img className="empty__img mb-5" src={emptyImg} alt="empty" />
              <div className="empty__title mb-2">No favorites :(</div>
              <div className="empty__subtitle mb-10">
                You haven't added anything to your favorites
              </div>
              <Link to="/" className="w-full">
                <MyBtn classNames="empty__btn w-10">
                  <BsArrowLeftShort />
                  Go back
                </MyBtn>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
