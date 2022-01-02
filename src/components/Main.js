import React from "react";
import Profile from "./Profile";
import Places from "./Places";

const Main = ({
  userInfo,
  cards,
  onCardClick,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) => {
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
