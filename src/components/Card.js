import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="element__photo"
      />
      <button
        type="button"
        className="element__btn-delete"
        aria__like="Удалить изображение"
      ></button>
      <div className="element__place">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__theme-like">
          <button
            type="button"
            className="element__like"
            aria-label="Поставить лайк."
          ></button>
          <p className="element__number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
