import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Places from "./Places";
import { api } from "../utils/Api";

const Main = ({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((card) => setCards(card))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <Profile
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
      />
      <Places cards={cards} onCardClick={onCardClick} />
    </main>
  );
};

export default Main;
