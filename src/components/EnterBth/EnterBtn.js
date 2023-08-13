import React from "react";
import { isLogged, loginPage, logOut, mainPage } from "../../services";

import "./EnterBtn.css";

export function EnterBtn() {
  const isUserLogged = isLogged();

  return (
    <button
      type="button"
      className="block__button"
      onClick={() => {
        if (isUserLogged) {
          logOut();
          window.location.replace(mainPage);
        } else {
          window.location.replace(loginPage);
        }
      }}
    >
      {isUserLogged ? "Выйти" : "Войти"}
    </button>
  );
}
