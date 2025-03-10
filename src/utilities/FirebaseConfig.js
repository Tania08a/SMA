import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3lhL6ALvCB_xTYgMxAfznlX6stLG1IcY",
  authDomain: "smapanama-edd62.firebaseapp.com",
  projectId: "smapanama-edd62",
  storageBucket: "smapanama-edd62.appspot.com",
  messagingSenderId: "611592139043",
  appId: "1:611592139043:web:9ac9f8f353245f314a1c96",
  measurementId: "G-SLLX3DX4F6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
