import React, { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Card = ({ name, link, countLike, owner, onCardClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner === currentUser._id;
  const cardDeleteButtonClassName = `card__btn card__btn_type_delete ${
    isOwn && "card__btn_state_active"
  }`;

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
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
};

export default Card;
