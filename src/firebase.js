import { initializeApp } from "firebase/app";
import { getDatabase, get, set, ref, push } from "firebase/database";

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
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


export const getPokemonPositions = () => {
    const positionRef = ref(database, "positions");
    return new Promise((resolve, reject) => {
        get(positionRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              resolve(snapshot.val());
            } else {
              console.log("No data available");
              reject();
            }
          })
          .catch((error) => {
            console.error(error);
            reject();
          });
      });
}

export const getScores = () => {
  const scoreRef = ref(database, 'score')
  console.log(scoreRef)
  return new Promise((resolve, reject) => {
    get(scoreRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          console.log("No data available");
          reject();
        }
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
}

export const addScore = async (newScore) => {
  const scoresRef = ref(database, 'score');

  const newScoreRef = push(scoresRef);

  set(newScoreRef, newScore);

}