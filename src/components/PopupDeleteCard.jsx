import React from "react";

const PopupDeleteCard = () => {
  return (
    <div class="popup popup_type_delete-card">
      <div class="popup__container">
        <h2 class="popup__title">Вы уверены?</h2>
        <form class="popup__form" name="form-delete-card">
          <button class="popup__btn" type="submit">
            Да
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

export default PopupDeleteCard;
