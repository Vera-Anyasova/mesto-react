import React from "react";

function PopupWithForm({
  type,
  name,
  title,
  buttonTitle,
  isOpen,
  onClose,
  children,
}) {
  return (
    <div className={`popup popup_${type} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button"
          aria-label="Закрыть форму."
          onClick={onClose}
        ></button>
        <form className={`form form-${name}`} name={`popup-form-${name}`}>
          <h2 className="form__heading">{title}</h2>
          <label className="form__field">{children}</label>
          <button
            type="submit"
            className="form__button"
            name="submit_btn"
            value="Сохранить"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
