const firebase = require('firebase');

const addToFirebaseDb = async (collectionName, name, userPoints) => {
  const db = firebase.firestore();

  const increment = firebase.firestore.FieldValue.increment(1);
  const resultData = {
    perfectHoney: name,
    userPoints: userPoints,
  };
  const matchedHoney = db.collection('honeys').doc(name);
  const collection = db.collection(collectionName).doc();

  // Batch mode to update two documents in one write operation
  const batch = db.batch();
  batch.set(matchedHoney, { matchesCounter: increment }, { merge: true });
  batch.set(collection, { resultData });
  // Indicate to firebase that these are the writing functions we want to commit
  batch.commit();
};

export default addToFirebaseDb;
