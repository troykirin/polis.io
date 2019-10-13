const firebase = require('firebase');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyDjiSgqKiLnnnWr9AjiQv6nP3idrShWoVo",
  authDomain: "polispace.firebaseapp.com",
  databaseURL: "https://polispace.firebaseio.com",
  projectId: "polispace",
  storageBucket: "polispace.appspot.com",
  messagingSenderId: "798337944887",
  appId: "1:798337944887:web:d4603e67089e34d4d05eb2",
  measurementId: "G-76YMF4MZKM"
};

// const auth = null;

export async function initializeFirebaseConnection() {
  try {
    await firebase.initializeApp(firebaseConfig);
    console.log("Success");
    // auth = firebase.auth;
    // console.log(auth); 
  } catch (err) {
    console.log(`Unable to establish connection to firebase: ${err.message}`);
  }
}

export async function createUser(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (err) {
    throw new Error("Could not create user: " + err.message);
  }
}

export async function loginUser(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw new Error("Could not sign in user: " + err.message);
  }
}