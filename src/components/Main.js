import React from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserIfnoApi(), api.getInitialCards()])
      .then((res) => {
        setUserName(res[0].name);
        setUserDescription(res[0].about);
        setUserAvatar(res[0].avatar);
        setCards(res[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__place">
          <div className="profile__icon-edit">
            <img className="profile__avatar" src={userAvatar} alt={userName} />
            <button
              type="button"
              className="profile__button-avatar"
              onClick={onEditAvatar}
              aria-label="Редактировать аватар."
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__content">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
                aria-label="Редактировать."
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
          aria-label="Добавить карточку."
        ></button>
      </section>
      <section className="elements page__element">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
