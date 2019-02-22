import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9p7HybUyGFvloR3-4IK4C9HCjZdHiNcc",
  authDomain: "todo-vue-b48d1.firebaseapp.com",
  databaseURL: "https://todo-vue-b48d1.firebaseio.com",
  projectId: "todo-vue-b48d1",
  storageBucket: "todo-vue-b48d1.appspot.com",
  messagingSenderId: "53286656265"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;