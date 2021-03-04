import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCE7KQRD7yt-37mN5R5xYEZZaGAwnCuDI8",
  authDomain: "react-pt14315-2020.firebaseapp.com",
  databaseURL: "https://react-pt14315-2020.firebaseio.com",
  projectId: "react-pt14315-2020",
  storageBucket: "react-pt14315-2020.appspot.com",
  messagingSenderId: "508740695323",
  appId: "1:508740695323:web:24894421d4c39c968fcfbe",
  measurementId: "G-X0MZ0894VF",
});

export { firebaseConfig as firebase };
