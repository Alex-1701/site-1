import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

export class StorageApi {
  static async addNew(file, path) {
    const storage = getStorage();
    const storageRef = ref(storage, path);
    return uploadBytes(storageRef, file).then((snapshot) => snapshot);
  }

  static async remove(path) {
    const storage = getStorage();
    const desertRef = ref(storage, path);
    await deleteObject(desertRef).then(() => {
      // console.log("success");
    });
  }

  static async getURL(path) {
    const storage = getStorage();
    return getDownloadURL(ref(storage, path));
  }
}
