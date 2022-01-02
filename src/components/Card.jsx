import React from "react";

const Card = ({ name, link, countLike, onCardClick }) => {
  return (
    <li class="card">
      <img
        onClick={() => onCardClick({ name, link })}
        class="card__img"
        src={link}
        alt={`Фото из ${name}`}
      />
      <div class="card__inner">
        <h2 class="card__title">{name}</h2>
        <div class="card__wrap">
          <button
            class="card__btn card__btn_type_like"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span class="card__count">{countLike}</span>
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
