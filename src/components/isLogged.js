import CryptoJS from "react-native-crypto-js";
import Cookies from "js-cookie";

// TODO хеши храни!!!
const loginHash = CryptoJS.MD5("admin").toString();
const passwordHash = CryptoJS.MD5("adminp").toString();

export default function isLogged(login, password) {
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
