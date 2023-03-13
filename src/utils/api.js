class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards = () => {
    return fetch(this._url + "cards", {
      headers: this._headers,
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  getUserIfnoApi = () => {
    return fetch(this._url + "users/me", {
      headers: this._headers,
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  deleteCard = (_id) => {
    return fetch(this._url + "cards/" + _id, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  sendUserIfno = (name, about) => {
    return fetch(this._url + "users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(name, about),
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  addNewCard = (name, link) => {
    return fetch(this._url + "cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(name, link),
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  addNewAvatar = (avatar) => {
    return fetch(this._url + "users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar.link }),
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  changeLikeCardStatus = (_id, isLiked) => {
    return fetch(this._url + "cards/" + _id + "/likes", {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  //   addLike = (_id) => {
  //     return fetch(this._url + "cards/" + _id + "/likes", {
  //       method: "PUT",
  //       headers: this._headers,
  //     }).then((res) => {
  //       return this._checkingResponse(res);
  //     });
  //   };

  //   deleteLike = (_id) => {
  //     return fetch(this._url + "cards/" + _id + "/likes", {
  //       method: "DELETE",
  //       headers: this._headers,
  //     }).then((res) => {
  //       return this._checkingResponse(res);
  //     });
  //   };
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-59/",
  headers: {
    authorization: "74800d66-2759-46e7-b69c-69709c21a575",
    "Content-Type": "application/json",
  },
});

export default api;
