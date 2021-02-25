import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ULi7Mm7gvKN7IVwfYds3lpMBfamG3TU",
  authDomain: "slack-clone-6e789.firebaseapp.com",
  projectId: "slack-clone-6e789",
  storageBucket: "slack-clone-6e789.appspot.com",
  messagingSenderId: "977807080062",
  appId: "1:977807080062:web:1a3a370a1c3d46179af62f",
  measurementId: "G-BQ3MTQR3JR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;