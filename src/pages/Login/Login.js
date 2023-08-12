import "./Login.css";
import isLogged from "../../components/isLogged";

export default function Login() {
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
            isLogged(
              document.getElementById("login").value.trim(),
              document.getElementById("password").value.trim(),
            )
          ) {
            window.location.replace("/admin");
          }
        }}
      >
        Войти
      </button>
    </div>
  );
}
