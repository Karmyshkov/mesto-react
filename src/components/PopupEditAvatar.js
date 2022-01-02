import React from "react";
import PopupWithForm from "./PopupWithForm.js";

const PopupEditAvatar = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
    >
      <input
        className="popup__field"
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupEditAvatar;
