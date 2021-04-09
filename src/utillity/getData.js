import firebase from "../services/firebaseApi";
const db = firebase.firestore();
export const getData = (path) => {
  let data = [];
  db.collection(path)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    }).catch(e => console.log(e.message))
  return data;
};
