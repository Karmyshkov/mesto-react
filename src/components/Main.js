import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Places from "./Places";
import { api } from "../utils/Api";

const Main = ({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) => {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserInfo(user);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <Profile
        userInfo={userInfo}
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
      />
      <Places cards={cards} onCardClick={onCardClick} />
    </main>
  );
};

export default Main;
