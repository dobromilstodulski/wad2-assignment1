import firebase from "firebase/app";
import "firebase/auth";

//Followed the following tutorial : https://www.youtube.com/watch?v=unr4s3jd9qA | https://github.com/satansdeer/react-firebase-auth/tree/master/src
const Firebase = firebase.initializeApp({
  apiKey: "AIzaSyCkUaaVMI6EXmaHxkKJrzCfuGB4iQMBhqY",
  authDomain: "wad2-reactjs-assignment1.firebaseapp.com",
  databaseURL: "https://wad2-reactjs-assignment1-default-rtdb.firebaseio.com/",
  projectId: "wad2-reactjs-assignment1",
  storageBucket: "wad2-reactjs-assignment1.appspot.com",
  messagingSenderId: "812616578355"
});

export default Firebase;