import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        type="avatar"
        name="avatar"
        title="Обновить аватар"
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <input
          id="avatar-input"
          type="url"
          className="form__item form__item_theme_avatar"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__item-error" id="avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        type="profile"
        name="profile"
        title="Редактировать профиль"
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <input
          id="name-input"
          type="text"
          className="form__item form__item_theme_name"
          name="name"
          placeholder="Имя"
          required
        />
        <span className="form__item-error" id="name-input-error"></span>
        <input
          id="about-input"
          type="text"
          className="form__item form__item_theme_job"
          name="about"
          placeholder="Вид деятельности"
          required
        />
        <span className="form__item-error" id="about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        type="card"
        name="card"
        title="Новое место"
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <input
          id="title-input"
          type="text"
          className="form__item form__item_theme_title"
          name="name"
          placeholder="Название"
          required
        />
        <span className="form__item-error" id="title-input-error"></span>
        <input
          id="link-input"
          type="url"
          className="form__item form__item_theme_link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__item-error" id="link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        type="delete"
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonTitle="Да"
      />
    </div>
  );
}

export default App;
