import firebase from 'firebase';
require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'quiz-las-dehesas.firebaseapp.com',
  databaseURL: 'https://quiz-las-dehesas.firebaseio.com',
  projectId: 'quiz-las-dehesas',
  storageBucket: 'quiz-las-dehesas.appspot.com',
  messagingSenderId: '33252773110',
  appId: '1:33252773110:web:a27699f2b12acc5a0830d7',
  measurementId: 'G-CYNQF3Q8MH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
