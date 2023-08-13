import React from "react";
import { adminPage, logIn } from "../../services";

import "./Login.css";

export function Login() {
  return (
    <div className="wrapLogin">
      <input id="login" type="text" className="login" placeholder="Логин" />
      <input
        id="password"
        type="password"
        className="login"
        placeholder="Пароль"
      />
      <button
        type="button"
        className="enterBtn"
        onClick={() => {
          if (
            logIn(
              document.getElementById("login").value.trim(),
              document.getElementById("password").value.trim(),
            )
          ) {
            window.location.replace(adminPage);
          }
        }}
      >
        Войти
      </button>
    </div>
  );
}
