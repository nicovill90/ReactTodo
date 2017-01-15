import firebase from 'firebase';

try {
  let config = {
    apiKey: "AIzaSyB1bwyQCh_2TTVdvVXOmd3rtQiFQy1LcCo",
    authDomain: "todo-12229.firebaseapp.com",
    databaseURL: "https://todo-12229.firebaseio.com",
    storageBucket: "todo-12229.appspot.com",
    messagingSenderId: "443841106346"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
