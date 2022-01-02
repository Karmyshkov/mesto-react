import React from "react";

const PopupTypeMore = ({ onClose, card }) => {
  return (
    <div
      class={`popup popup_type_more ${
        Object.keys(card).length !== 0 && "popup_opened"
      }`}
    >
      <div class="popup__inner">
        <button
          onClick={() => onClose(false)}
          class="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img class="popup__img" src={card.link} alt="#" />
        <h2 class="popup__text">{card.name}</h2>
      </div>
    </div>
  );
};

export default PopupTypeMore;
