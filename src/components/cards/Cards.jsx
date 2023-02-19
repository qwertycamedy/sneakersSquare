import React from "react";
import Card from "./card/Card";
import cl from "./Cards.module.scss";

const Cards = ({ cards, addToCart, addToFav, searchValue }) => {
  return (
    <div className={cl.cards}>
      {cards
      .filter(card => card.title.toLowerCase().includes(searchValue))
      .map(card => (
        <Card
          key={card.id}
          card={card}
          addToCart={addToCart}
          addToFav={addToFav}
        />
      ))}
    </div>
  );
};

export default Cards;
