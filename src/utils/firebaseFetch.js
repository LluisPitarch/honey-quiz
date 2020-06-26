const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig');

const firebaseFetch = async (collectionName) => {
  const db = firebase.firestore();
  const fetchedData = [];
  const data = await db
    .collection(collectionName)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        fetchedData.push(doc.data());
      });
    });

  return fetchedData;
};

export default firebaseFetch;
