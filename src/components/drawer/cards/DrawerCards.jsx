import React from "react";
import DrawerCard from "./card/DrawerCard";
import cl from "./DrawerCards.module.scss";

const DrawerCards = ({ cards, onAddToggle }) => {
  return (
    <div className={cl.cards + " flex flex-col gap-5 mt-8 mb-8"}>
      {cards.map(
        card => card.isAdded && <DrawerCard card={card} key={card.id} onAddToggle={onAddToggle} />
      )}
    </div>
  );
};

export default DrawerCards;
