import React from "react";

const PopupWithForm = ({ name, children, isOpen, onClose, title }) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__btn" type="submit">
            Сохранить
          </button>
          <button
            onClick={() => onClose(false)}
            className="popup__close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
