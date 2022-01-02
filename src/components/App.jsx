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
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([user, cards]) => {
        setUserInfo(user);
        setCards(cards);
      }
    );
  }, []);

  const handleEditAvatarClick = (evt) => {};

  const handleEditProfileClick = (evt) => {};

  const handleAddPlaceClick = (evt) => {};

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          userInfo={userInfo}
          cards={cards}
          setIsAddPlacePopupOpen={setIsAddPlacePopupOpen}
          setIsEditProfilePopupOpen={setIsEditProfilePopupOpen}
          setIsEditAvatarPopupOpen={setIsEditAvatarPopupOpen}
          setSelectedCard={setSelectedCard}
        />
        <Footer />
      </div>
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
};

export default App;
