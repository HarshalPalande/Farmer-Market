import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const logoutButton = document.getElementById("logout-button");

// Register User
registerButton?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registration successful!"))
    .catch((error) => console.error("Registration Error:", error.message));
});

// Login User
loginButton?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "index.html")
    .catch((error) => console.error("Login Error:", error.message));
});

// Logout User
logoutButton?.addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "login.html");
});

// Monitor Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-info").textContent = `Hello, ${user.email}`;
  }
});
