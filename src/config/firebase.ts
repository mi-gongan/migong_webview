import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_SENDERID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASSUREMENT_ID,
  apiKey: "AIzaSyCztKyHRW928RxbSqHLPAhvgaLVFYFhXrs",
  authDomain: "migong-42daa.firebaseapp.com",
  projectId: "migong-42daa",
  storageBucket: "migong-42daa.appspot.com",
  messagingSenderId: "1063526528034",
  appId: "1:1063526528034:web:371152cf38d9bd3761467b",
  measurementId: "G-5NR9ZQT631",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
