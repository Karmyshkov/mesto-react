import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupAddCard from "./PopupAddCard.jsx";
import PopupEditProfile from "./PopupEditProfile.jsx";
import PopupEditAvatar from "./PopupEditAvatar.jsx";
import { api } from "../utils/Api";

const App = () => {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isAddCardFlag, setIsAddCardFlag] = useState(false);
  const [isEditProfileFlag, setIsEditProfileFlag] = useState(false);
  const [isEditAvatarFlag, setIsEditAvatarFlag] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([user, cards]) => {
        setUserInfo(user);
        setCards(cards);
      }
    );
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          userInfo={userInfo}
          cards={cards}
          setIsAddCardFlag={setIsAddCardFlag}
          setIsEditProfileFlag={setIsEditProfileFlag}
          setIsEditAvatarFlag={setIsEditAvatarFlag}
        />
        <Footer />
      </div>
      <PopupAddCard isAddCardFlag={isAddCardFlag} />
      <PopupEditProfile isEditProfileFlag={isEditProfileFlag} />
      <PopupEditAvatar isEditAvatarFlag={isEditAvatarFlag} />
    </div>
  );
};

export default App;
