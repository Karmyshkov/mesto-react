import React from "react";
import Profile from "./Profile.jsx";
import Places from "./Places.jsx";

const Main = ({
  userInfo,
  cards,
  setIsAddPlacePopupOpen,
  setIsEditProfilePopupOpen,
  setIsEditAvatarPopupOpen,
  setSelectedCard,
}) => {
  return (
    <main className="content">
      <Profile
        userInfo={userInfo}
        setIsAddPlacePopupOpen={setIsAddPlacePopupOpen}
        setIsEditProfilePopupOpen={setIsEditProfilePopupOpen}
        setIsEditAvatarPopupOpen={setIsEditAvatarPopupOpen}
      />
      <Places cards={cards} setSelectedCard={setSelectedCard} />
    </main>
  );
};

export default Main;
