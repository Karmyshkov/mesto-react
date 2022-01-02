import React from "react";

const PopupTypeMore = ({ isImagePopupFlag, selectedCard }) => {
  return (
    <div class={`popup popup_type_more ${isImagePopupFlag && "popup_opened"}`}>
      <div class="popup__inner">
        <button
          class="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img class="popup__img" src={selectedCard.link} alt="#" />
        <h2 class="popup__text">{selectedCard.name}</h2>
      </div>
    </div>
  );
};

export default PopupTypeMore;
