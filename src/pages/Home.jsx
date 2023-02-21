import React from "react";
import Hero from "../components/hero/Hero";
import All from "../components/all/All";

const Home = ({
  heroSlides,
  cards,
  cartCards,
  addToCart,
  addToFav,
  searchValue,
  searchValueChange,
  searchValueClear,
  isLoading,
}) => {
  return (
    <>
      <Hero heroSlides={heroSlides} />
      <All
        cards={cards}
        cartCards={cartCards}
        addToCart={addToCart}
        addToFav={addToFav}
        searchValue={searchValue}
        searchValueChange={searchValueChange}
        searchValueClear={searchValueClear}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;
