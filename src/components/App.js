import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupAddCard from "./PopupAddCard";
import PopupEditProfile from "./PopupEditProfile";
import PopupEditAvatar from "./PopupEditAvatar";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (obj) => {
    setSelectedCard(obj);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  return (
    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
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
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
