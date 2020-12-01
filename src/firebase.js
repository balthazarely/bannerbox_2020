import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2oUDvovf0pPbBVeg4E_9N2xWCJAXbFKk",
  authDomain: "bannerbin-552ae.firebaseapp.com",
  databaseURL: "https://bannerbin-552ae.firebaseio.com",
  projectId: "bannerbin-552ae",
  storageBucket: "bannerbin-552ae.appspot.com",
  messagingSenderId: "541410897030",
  appId: "1:541410897030:web:3cfe7da84944788926f507",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
