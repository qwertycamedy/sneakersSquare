import React from "react";
import DrawerCard from "./card/DrawerCard";
import cl from "./DrawerCards.module.scss";

const DrawerCards = ({ cards = [], remove }) => {
  return (
    <div className={cl.cards + " flex flex-col gap-5 mt-8 mb-8"}>
      {cards.map(card => (
        <DrawerCard card={card} key={card.id} remove={remove} />
      ))}
    </div>
  );
};

export default DrawerCards;
