import React from "react";
import PopupWithForm from "./PopupWithForm";

const PopupAddCard = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
    >
      <input
        className="popup__field"
        type="text"
        name="new-place"
        id="new-place"
        placeholder="Название"
      />
      <span id="new-place-error" className="popup__error"></span>
      <input
        className="popup__field"
        type="url"
        name="new-img"
        id="new-img"
        placeholder="Ссылка на картинку"
      />
      <span id="new-img-error" className="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupAddCard;
