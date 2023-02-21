import React, { useContext } from "react";
import Cards from "../components/cards/Cards";
import emptyImg from "../assets/img/empty.png";
import { Link } from "react-router-dom";
import MyBtnSquare from "../UI/btn-square/MyBtnSquare";
import { SlArrowLeft } from "react-icons/sl";
import AppContext from "../context";
import Info from "../components/info/Info";

const Favorites = ({ addToCart, addToFav, searchValue, isLoading }) => {
  const { favCards, cartCards } = useContext(AppContext);

  return (
    <div className="favorites">
      <div className="container__inner">
        <div className="favorites__inner">
          {favCards.length > 0 ? (
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
                cards={favCards}
                cartCards={cartCards}
                addToCart={addToCart}
                addToFav={addToFav}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            </>
          ) : (
            <Info
              img={emptyImg}
              title="No favorites :("
              subtitle="
            You haven't added anything to your favorites"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
