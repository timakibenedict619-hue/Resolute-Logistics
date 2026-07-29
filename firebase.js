// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpbzVP5Tke7PBM9ST8Nh9Qx0uG1Lc2utc",
  authDomain: "resolute-logistics.firebaseapp.com",
  projectId: "resolute-logistics",
  storageBucket: "resolute-logistics.firebasestorage.app",
  messagingSenderId: "321681234442",
  appId: "1:321681234442:web:509140ec8c20bd29809df3",
  measurementId: "G-SJ53951CGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase services
export { app, auth, db };
