
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDJUA02ix4rIKgxf_GyVYIQpp_oq4Siwss",
  authDomain: "auto-review-system.firebaseapp.com",
  projectId: "auto-review-system",
  storageBucket: "auto-review-system.appspot.com",
  messagingSenderId: "119663325528",
  appId: "1:119663325528:web:a34585afa2112d286eb52d",
  measurementId: "G-G07SCRJ0KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;