import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const IMAGES = "images";
const CITIES = "cities";

export const getAllImages = async () => {
  const imagesRef = collection(db, IMAGES);

  const docsSnap = await getDocs(imagesRef);

  const res = [];

  docsSnap.forEach((doc) => {
    res.push(doc.data());
  });

  return res;
};
