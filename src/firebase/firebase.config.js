import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKZjg74H8YnwDs4vlnIf8158Ta486pqd0",
  authDomain: "hiring-staff-cfdc4.firebaseapp.com",
  projectId: "hiring-staff-cfdc4",
  storageBucket: "hiring-staff-cfdc4.appspot.com",
  messagingSenderId: "339091087194",
  appId: "1:339091087194:web:5ae8e458b07f66be161d63",
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
