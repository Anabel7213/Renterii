import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB3HrZUh9puCnClG2-qljEn4QBmHTTpXzU",
  authDomain: "test-8c9f7.firebaseapp.com",
  projectId: "test-8c9f7",
  storageBucket: "test-8c9f7.appspot.com",
  messagingSenderId: "706405260962",
  appId: "1:706405260962:web:96714cf75aed9a130681fb",
  measurementId: "G-C8MLG1HKY0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app);

export { db, storage }