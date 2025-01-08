// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration (use your own)
const firebaseConfig = {
    apiKey: "AIzaSyDeuxYewr81hwkgGIVqeYf1s9plyu_ioT8",
    authDomain: "form-authentication-85ff7.firebaseapp.com",
    projectId: "form-authentication-85ff7",
    storageBucket: "form-authentication-85ff7.firebasestorage.app",
    messagingSenderId: "573615822255",
    appId: "1:573615822255:web:89cbb1e96ce85388710b5a"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
function signUp(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  console.log(firstName,lastName,email,password,repeatPassword);

  if (!email || !password || !repeatPassword) {
    alert("Please fill out all fields.");
    return;
  }
  if (password !== repeatPassword) {
    alert("Passwords don't match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Welcome, ${firstName} ${lastName}!`);
      window.location.href = "login.html";  
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

// Sign In Function
function signIn(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Welcome back!");
      window.location.href = "index.html";  // Redirect to homepage
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

// Event Listeners for Form Submissions
document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");

  if (signUpButton) {
    signUpButton.addEventListener("click", signUp);
  }

  if (signInButton) {
    signInButton.addEventListener("click", signIn);
  }
});