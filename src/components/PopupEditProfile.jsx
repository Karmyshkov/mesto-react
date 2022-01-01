import React from "react";

const PopupEditProfile = () => {
  return (
    <div class="popup popup_type_edit-profile">
      <div class="popup__container">
        <h2 class="popup__title">Редактировать профиль</h2>
        <form class="popup__form" name="form-edit-profile" novalidate>
          <input
            class="popup__field"
            type="text"
            name="user-name"
            id="user-name"
            required
            minlength="2"
            maxlength="40"
          />
          <span id="user-name-error" class="popup__error"></span>
          <input
            class="popup__field"
            type="text"
            name="user-job"
            id="user-job"
            required
            minlength="2"
            maxlength="200"
          />
          <span id="user-job-error" class="popup__error"></span>
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

export default PopupEditProfile;
