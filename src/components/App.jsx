import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupAddCard from "./PopupAddCard.jsx";
import PopupEditProfile from "./PopupEditProfile.jsx";
import PopupEditAvatar from "./PopupEditAvatar.jsx";
import ImagePopup from "./ImagePopup.jsx";
import { api } from "../utils/Api";

const App = () => {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isAddCardFlag, setIsAddCardFlag] = useState(false);
  const [isEditProfileFlag, setIsEditProfileFlag] = useState(false);
  const [isEditAvatarFlag, setIsEditAvatarFlag] = useState(false);
  const [isImagePopupFlag, setIsImagePopupFlag] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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
          setIsImagePopupFlag={setIsImagePopupFlag}
          setSelectedCard={setSelectedCard}
        />
        <Footer />
      </div>
      <PopupAddCard isOpen={isAddCardFlag} closeHandler={setIsAddCardFlag} />
      <PopupEditProfile
        isOpen={isEditProfileFlag}
        closeHandler={setIsEditProfileFlag}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarFlag}
        closeHandler={setIsEditAvatarFlag}
      />
      <ImagePopup
        isOpen={isImagePopupFlag}
        closeHandler={setIsImagePopupFlag}
        card={selectedCard}
      />
    </div>
  );
};

export default App;
