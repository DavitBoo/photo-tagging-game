import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD47_RDLF7KNig_HgQ-mAWH6i37JFww2C4",
    authDomain: "photo-tagging-game-56d3f.firebaseapp.com",
    databaseURL: "https://photo-tagging-game-56d3f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "photo-tagging-game-56d3f",
    storageBucket: "photo-tagging-game-56d3f.appspot.com",
    messagingSenderId: "211058290878",
    appId: "1:211058290878:web:4fdd66b44f77e45f6faeef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export { database };