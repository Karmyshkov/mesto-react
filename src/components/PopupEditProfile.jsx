import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";

const PopupEditProfile = ({ isOpen, closeHandler }) => {
  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      closeHandler={closeHandler}
      title="Редактировать профиль"
    >
      <input
        class="popup__field"
        type="text"
        name="user-name"
        id="user-name"
        required
        minlength={2}
        maxlength={40}
      />
      <span id="user-name-error" class="popup__error"></span>
      <input
        class="popup__field"
        type="text"
        name="user-job"
        id="user-job"
        required
        minlength={2}
        maxlength={200}
      />
      <span id="user-job-error" class="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupEditProfile;
