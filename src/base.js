import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4ILBU5Ql4HdKorKSeVWVqLYr8_hcAf2A",
    authDomain: "portfolio-9c301.firebaseapp.com",
    databaseURL: "https://portfolio-9c301-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };
export default base;