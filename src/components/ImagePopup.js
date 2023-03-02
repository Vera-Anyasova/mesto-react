import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    card && (
      <div className={`popup popup_photo ${card && "popup_opened"}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__button popup__button-photo"
            aria-label="Закрыть изображение."
            onClick={onClose}
          ></button>
          <img className="popup__image" alt={card.name} src={`${card.link}`} />
          <h2 className="popup__title">{card.name}</h2>
        </div>
      </div>
    )
  );
}

export default ImagePopup;
