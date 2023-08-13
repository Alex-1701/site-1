import CryptoJS from "react-native-crypto-js";
import Cookies from "js-cookie";

const loginHash = "21232f297a57a5a743894a0e4a801fc3";
const passwordHash = "a14dbe401885797b43ce9d66e98968c3";

export function logIn(login, password) {
  if (
    loginHash === CryptoJS.MD5(login).toString() &&
    passwordHash === CryptoJS.MD5(password).toString()
  ) {
    Cookies.set("isLogged", true);
    return true;
  }
  Cookies.set("isLogged", false);
  return false;
}

export function logOut() {
  Cookies.set("isLogged", false);
}

export function isLogged() {
  return Cookies.get("isLogged") === "true";
}
