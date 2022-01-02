import React from "react";

const Card = ({ name, link }) => {
  return (
    <li class="card">
      <img class="card__img" src={link} alt={`Фото из ${name}`} />
      <div class="card__inner">
        <h2 class="card__title">{name}</h2>
        <div class="card__wrap">
          <button
            class="card__btn card__btn_type_like"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span class="card__count"></span>
        </div>
      </div>
      <button
        class="card__btn card__btn_type_delete"
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
};

export default Card;
