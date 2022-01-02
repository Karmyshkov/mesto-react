import React from "react";

const PopupTypeMore = ({ onClose, card }) => {
  return (
    <div
      className={`popup popup_type_more ${
        Object.keys(card).length !== 0 && "popup_opened"
      }`}
    >
      <div className="popup__inner">
        <button
          onClick={() => onClose(false)}
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="popup__img" src={card.link} alt="#" />
        <h2 className="popup__text">{card.name}</h2>
      </div>
    </div>
  );
};

export default PopupTypeMore;
