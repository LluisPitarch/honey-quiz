const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyADzAMcSDLnRlHqSMch4IvUvSNiAJptrKc',
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

const firebaseSet = async (collectionName, dataPath) => {
  try {
    const db = firebase.firestore();
    const dataToSet = require(dataPath);

    await db.collection(collectionName).doc(docName).set({
      dataToSet,
    });

    console.log('The data was set congrats :)');
  } catch (error) {
    console.error(`There is an error setting the data ${error}`);
  }
};

export default firebaseSet;
