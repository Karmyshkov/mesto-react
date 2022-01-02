import React from "react";

const Card = ({ name, link, countLike, onCardClick }) => {
  return (
    <li className="card">
      <img
        onClick={() => onCardClick({ name, link })}
        className="card__img"
        src={link}
        alt={`Фото из ${name}`}
      />
      <div className="card__inner">
        <h2 className="card__title">{name}</h2>
        <div className="card__wrap">
          <button
            className="card__btn card__btn_type_like"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span className="card__count">{countLike}</span>
        </div>
      </div>
      <button
        className="card__btn card__btn_type_delete"
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
};

export default Card;
