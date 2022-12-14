import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const checkUser = async (email: string, nonce: string) => {
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (
      data.email === email &&
      data.nonce === nonce &&
      data.state === "request"
    ) {
      await setDoc(docRef, { state: "logined" }, { merge: true });
      return true;
    } else {
      return false;
    }
  }
  return false;
};

export const logoutUser = async (email: string) => {
  const docRef = doc(db, "users", email);
  await setDoc(docRef, { state: "logout" }, { merge: true });
};
