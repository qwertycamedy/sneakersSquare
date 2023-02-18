import React from "react";
import DrawerCard from "./card/DrawerCard";
import cl from "./DrawerCards.module.scss";

const DrawerCards = ({ cards = [], onRemove }) => {
  return (
    <div className={cl.cards + " flex flex-col gap-5 mt-8 mb-8"}>
      {cards.map(card => (
        <DrawerCard card={card} key={card.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default DrawerCards;
