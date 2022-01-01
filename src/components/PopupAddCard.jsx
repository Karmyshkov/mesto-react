import React from "react";

const PopupAddCard = () => {
  return (
    <div class="popup popup_type_add-card">
      <div class="popup__container">
        <h2 class="popup__title">Новое место</h2>
        <form class="popup__form" name="form-add-place" novalidate>
          <input
            class="popup__field"
            type="text"
            name="new-place"
            id="new-place"
            placeholder="Название"
            required
            minlength="2"
            maxlength="30"
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

export default PopupAddCard;
