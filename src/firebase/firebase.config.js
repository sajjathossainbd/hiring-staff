import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyA5gZqq0eIjMYrSH5SJ4JRHWi24kr6Otl4",
// authDomain: "hiring-staff.firebaseapp.com",
// projectId: "hiring-staff",
// storageBucket: "hiring-staff.appspot.com",
// messagingSenderId: "453731011789",
// appId: "1:453731011789:web:cd7121ea0b92cb04c1ad84",
