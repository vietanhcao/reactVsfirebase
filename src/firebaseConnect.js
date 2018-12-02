
// Initialize Firebase
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCxnzBh67iQxv4wQ5yazlFO7ikv6dIVmc4",
    authDomain: "listnotereact.firebaseapp.com",
    databaseURL: "https://listnotereact.firebaseio.com",
    projectId: "listnotereact",
    storageBucket: "listnotereact.appspot.com",
    messagingSenderId: "83226181080"
};

export const firebaseConnect = firebase.initializeApp(config);
let data = firebase.database().ref('dataForNote');
    data.once('value').then((snapshot) => {
        console.log(snapshot.val());      
    })