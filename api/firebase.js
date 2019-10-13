const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

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

var rtd = null;

export async function initializeFirebaseConnection() {
  try {
    await firebase.initializeApp(firebaseConfig);
    console.log("Success");
    // auth = firebase.auth;
    rtd = firebase.database();
    // console.log(auth); 
  } catch (err) {
    console.log(`Unable to establish connection to firebase: ${err.message}`);
  }
}

export async function createUser(email, password) {
  try {
    let user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(`user is: ${JSON.stringify(user)}`);
    rtd.ref("users/" + user["user"]["uid"]).set({
      firstLogin: true,
    });
  } catch (err) {
    throw new Error("Could not create user: " + err.message);
  }
}

export async function loginUser(email, password) {
  try {
    let user = await firebase.auth().signInWithEmailAndPassword(email, password);
    rtd.ref("users/" + user["user"]["uid"]).set({
      firstLogin: false,
    });
    return user["user"]["uid"];
  } catch (err) {
    throw new Error("Could not sign in user: " + err.message);
  }
}

export async function addTagsAndInputToUser(entities, userInput) {
  try {
    let uid = await firebase.auth().currentUser.uid; 
    let update = {};
    update["users/" + uid + "/tags"] = entities;
    update["users/" + uid + "/rant"] = userInput
    rtd.ref().update(update);
  } catch (err) {
    throw new Error("Could not add tags to user: " + err.message);
  }
}

export async function getUserTags() {
  try {
    let uid = await firebase.auth().currentUser.uid;
    let tagRef = rtd.ref("users/" + uid + "/tags")
    const response = await tagRef.once('value');

    if (response.exists()) {
      return response.val();
    }
  } catch (err) {
    throw new Error("Coud not get tags for user");
  }
}

export async function getUsers() {
  let usersRef = rtd.ref("users");
  const response = await usersRef.once('value');

  return response.val();
}