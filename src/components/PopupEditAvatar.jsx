import react from "react";

const PopupEditAvatar = () => {
  return (
    <div class="popup popup_type_edit-avatar">
      <div class="popup__container">
        <h2 class="popup__title">Обновить аватар</h2>
        <form class="popup__form" name="form-new-avatar" novalidate>
          <input
            class="popup__field"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="avatar-error" class="popup__error"></span>
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

export default PopupEditAvatar;
