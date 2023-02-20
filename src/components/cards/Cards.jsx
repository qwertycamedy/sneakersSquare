import React from "react";
import Card from "./card/Card";
import cl from "./Cards.module.scss";

const Cards = ({
  cards,
  cartCards,
  addToCart,
  addToFav,
  searchValue,
  isLoading,
}) => {
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchValue)
  );
  const renderCards = () => {
    return (isLoading ? [...Array(8)] : filteredCards).map((card, index) => (
      <Card
        key={index}
        card={{
          ...card,
          isAdded: cartCards.some(
            cartCard => Number(cartCard.id) === Number(card.id)
          ),
        }}
        addToCart={addToCart}
        addToFav={addToFav}
        isLoading={isLoading}
      />
    ));
  };
  return <div className={cl.cards}>{renderCards()}</div>;
};

export default Cards;
