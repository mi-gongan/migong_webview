import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./env";

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messurementId,
  appId: config.firebase.appId,
  measurementId: config.firebase.messurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
