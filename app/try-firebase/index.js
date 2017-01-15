import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyB1bwyQCh_2TTVdvVXOmd3rtQiFQy1LcCo",
  authDomain: "todo-12229.firebaseapp.com",
  databaseURL: "https://todo-12229.firebaseio.com",
  storageBucket: "todo-12229.appspot.com",
  messagingSenderId: "443841106346"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Le Todo',
    version: '1.0'
  },
  user: {
    name: 'Nec',
    age: 26
  },
  isRunning: true
});

// firebaseRef.update({
//   'app/name': 'Todo App',
//   'user/name': 'Neco'
// });

// firebaseRef.update({ isRunning: null });
// firebaseRef.child('user/age').remove();

// once('value') returns a promise
// firebaseRef
//   .once('value')
//   .then((snapshot) => {
//     console.log('Got entire database', snapshot.val());
//   }, (error) => {
//     console.log('Unable to fetch the value', e);
//   });

let logData = (snapshot) => {
  console.log('Name changed', snapshot.val());
};

// firebaseRef.child('user').on('value', logData);

firebaseRef.child('app').update({ name: 'Todo App' });
firebaseRef.child('user').update({ name: 'Neco' });

// firebaseRef.off('value', logData);

firebaseRef.update({ 'app/version': 1.1 });

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todos added', snapshot.key, snapshot.val());
});

todosRef.push({ text: 'Text 1' });
todosRef.push({ text: 'Text 2' });
