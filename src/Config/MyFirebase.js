import firebase from "firebase";

const config = {
  apiKey: "AIzaSyADBAUhUJCYnRWNRrU3dndxifW7WIuE-_4",
  authDomain: "chatapp-d2024.firebaseapp.com",
  projectId: "chatapp-d2024",
  storageBucket: "chatapp-d2024.appspot.com",
  messagingSenderId: "910046260408",
  appId: "1:910046260408:web:4ab2d717ee0d26a941584d",
  measurementId: "G-14400S4WHB"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
