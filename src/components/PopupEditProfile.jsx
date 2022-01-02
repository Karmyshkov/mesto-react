import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";

const PopupEditProfile = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
    >
      <input
        className="popup__field"
        type="text"
        name="user-name"
        id="user-name"
      />
      <span id="user-name-error" className="popup__error"></span>
      <input
        className="popup__field"
        type="text"
        name="user-job"
        id="user-job"
      />
      <span id="user-job-error" className="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupEditProfile;
