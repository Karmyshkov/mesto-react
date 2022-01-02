import React from "react";

const PopupDeleteCard = () => {
  return (
    <div className="popup popup_type_delete-card">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form" name="form-delete-card">
          <button className="popup__btn" type="submit">
            Да
          </button>
          <button
            className="popup__close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default PopupDeleteCard;
