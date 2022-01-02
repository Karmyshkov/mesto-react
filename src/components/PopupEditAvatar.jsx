import react from "react";
import PopupWithForm from "./PopupWithForm.jsx";

const PopupEditAvatar = ({ isOpen, closeHandler }) => {
  return (
    <PopupWithForm
      name="edit-avatar"
      isOpen={isOpen}
      closeHandler={closeHandler}
      title="Обновить аватар"
    >
      <input
        class="popup__field"
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="avatar-error" class="popup__error"></span>
    </PopupWithForm>
  );
};

export default PopupEditAvatar;
