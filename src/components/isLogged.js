import CryptoJS from "react-native-crypto-js";
import Cookies from 'js-cookie';

// TODO хеши храни!!!
let loginHash = CryptoJS.MD5("admin").toString();
let passwordHash = CryptoJS.MD5("adminp").toString();

export default function isLogged(login, password) {
    if (loginHash === CryptoJS.MD5(login).toString() &&
        passwordHash === CryptoJS.MD5(password).toString()) {
        Cookies.set("logged", true);
        return true;
    } else {
        Cookies.set("logged", false);
        return false;
    }
}
