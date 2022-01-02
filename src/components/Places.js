import React from "react";
import Card from "./Card";

const Places = ({ cards, onCardClick }) => {
  const cardsComponents = cards.map((card) => (
    <Card
      key={card._id}
      name={card.name}
      link={card.link}
      countLike={card.likes.length}
      onCardClick={onCardClick}
    />
  ));

  return (
    <section className="places page__places">
      <ul className="places__cards">{cardsComponents}</ul>
    </section>
  );
};

export default Places;
