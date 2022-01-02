import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";

const PopupAddCard = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
    >
      <input
        class="popup__field"
        type="text"
        name="new-place"
        id="new-place"
        placeholder="Название"
        required
        minlength={2}
        maxlength={30}
      />
      <span id="new-place-error" class="popup__error"></span>
      <input
        class="popup__field"
        type="url"
        name="new-img"
        id="new-img"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="new-img-error" class="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupAddCard;
