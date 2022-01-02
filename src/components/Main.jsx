import React from "react";
import Profile from "./Profile.jsx";
import Places from "./Places.jsx";

const Main = ({
  userInfo,
  cards,
  setIsAddCardFlag,
  setIsEditProfileFlag,
  setIsEditAvatarFlag,
  setSelectedCard,
  setIsImagePopupFlag,
}) => {
  const handleEditAvatarClick = (evt) => {};

  const handleEditProfileClick = (evt) => {};

  const handleAddPlaceClick = (evt) => {};

  return (
    <main className="content">
      <Profile
        userInfo={userInfo}
        setIsAddCardFlag={setIsAddCardFlag}
        setIsEditProfileFlag={setIsEditProfileFlag}
        setIsEditAvatarFlag={setIsEditAvatarFlag}
      />
      <Places
        cards={cards}
        setSelectedCard={setSelectedCard}
        setIsImagePopupFlag={setIsImagePopupFlag}
      />
    </main>
  );
};

export default Main;
