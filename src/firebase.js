import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDujVV-kO40_9r4opNGRvgUVgdghgzJ9UY",
  authDomain: "bootsrap-template.firebaseapp.com",
  projectId: "bootsrap-template",
  storageBucket: "bootsrap-template.appspot.com",
  messagingSenderId: "62793675309",
  appId: "1:62793675309:web:826f2aa28b0f46db3fbea4",
  measurementId: "G-EYR43RHGBC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
