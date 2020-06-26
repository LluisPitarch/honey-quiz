const firebase = require('firebase');

const addToFirebaseDb = async (collectionName, name, userPoints) => {
  const db = firebase.firestore();
  const resultData = {
    perfectHoney: name,
    userPoints: userPoints,
  };
  const data = await db.collection(collectionName).add(resultData);
};

export default addToFirebaseDb;
