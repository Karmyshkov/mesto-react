import React from "react";

const PopupWithForm = ({ name, children, isOpen, title }) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div class="popup__container">
        <h2 class="popup__title">{title}</h2>
        <form class="popup__form" name={name} noValidate>
          {children}
          <button class="popup__btn" type="submit">
            Сохранить
          </button>
          <button
            class="popup__close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
