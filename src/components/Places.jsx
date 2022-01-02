import React from "react";
import Card from "./Card.jsx";

const Places = ({ cards }) => {
  console.log(cards);
  const CardsComponents = cards.map((card) => (
    <Card
      key={card._id}
      name={card.name}
      link={card.link}
      countLike={card.likes.length}
    />
  ));

  return (
    <section className="places page__places">
      <ul className="places__cards">{CardsComponents}</ul>
    </section>
  );
};

export default Places;
