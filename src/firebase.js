import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  // Your Firebase project configuration
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export { database };