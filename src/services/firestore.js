import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export class FirestoreApi {
  static async getAll(collectionName) {
    const collectionRef = collection(db, collectionName);
    const docsSnap = await getDocs(collectionRef);
    const res = [];
    docsSnap.forEach((doc) => {
      res.push({ ...doc.data(), id: doc.id });
    });
    return res;
  }

  static async addNew(collectionName, value) {
    const docRef = await addDoc(collection(db, collectionName), value);
    return docRef.id;
  }

  static async update(collectionName, id, value) {
    await setDoc(doc(db, collectionName, id), value);
  }

  static async remove(collectionName, id) {
    await deleteDoc(doc(db, collectionName, id));
  }
}
