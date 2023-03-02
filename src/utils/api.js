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
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-59/",
  headers: {
    authorization: "74800d66-2759-46e7-b69c-69709c21a575",
    "Content-Type": "application/json",
  },
});

export default api;
