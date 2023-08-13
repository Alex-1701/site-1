import CryptoJS from "react-native-crypto-js";
import Cookies from "js-cookie";

const loginHash = "21232f297a57a5a743894a0e4a801fc3";
const passwordHash = "ba64b3bf5c60c619fdc29402f38f7186";

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
