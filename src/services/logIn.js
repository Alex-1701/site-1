import CryptoJS from "react-native-crypto-js";
import Cookies from "js-cookie";
import preval from "preval.macro";

const loginHash = preval`module.exports = () => { 
  const CryptoJS = require ("react-native-crypto-js"); 
  return CryptoJS.MD5(process.env.REACT_APP_LOGIN).toString(); 
}`;

const passwordHash = preval`module.exports = () => { 
  const CryptoJS = require ("react-native-crypto-js"); 
  return CryptoJS.MD5(process.env.REACT_APP_PASSWORD).toString(); 
}`;

console.log("before", loginHash);
console.log("before", passwordHash);

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
