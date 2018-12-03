
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
let data = firebase.database().ref('dataForNote/note2');
    // data.once('value').then((snapshot) => {
    //     console.log(snapshot.val());      
    // })

    data.set({
        id:1,
        title: "ghi chu 20/12",
        content: "Demo content for note"
    })