import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCxnzBh67iQxv4wQ5yazlFO7ikv6dIVmc4",
    authDomain: "listnotereact.firebaseapp.com",
    databaseURL: "https://listnotereact.firebaseio.com",
    projectId: "listnotereact",
    storageBucket: "listnotereact.appspot.com",
    messagingSenderId: "83226181080"
};
firebase.initializeApp(config);
export const firebaseConnect = firebase.database().ref('dataForNote/');
