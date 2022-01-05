import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const PopupEditProfile = ({ isOpen, onClose }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    description: "",
  });

  const changeUserInfoHandler = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
  };

  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
    >
      <input
        onChange={changeUserInfoHandler}
        className="popup__field"
        type="text"
        name="name"
        placeholder="Имя пользователя"
      />
      <span id="user-name-error" className="popup__error"></span>
      <input
        onChange={changeUserInfoHandler}
        className="popup__field"
        type="text"
        name="description"
        placeholder="Работа"
      />
      <span id="user-job-error" className="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupEditProfile;
