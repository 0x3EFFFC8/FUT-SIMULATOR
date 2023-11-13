import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJz-zVSt60Vu4Oressc1bo2qXa65srk_Y",
  authDomain: "fut-simulator-a429c.firebaseapp.com",
  projectId: "fut-simulator-a429c",
  storageBucket: "fut-simulator-a429c.appspot.com",
  messagingSenderId: "446463283261",
  appId: "1:446463283261:web:9063e949eb543b6adbda54",
  measurementId: "G-TQMEML59DL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
