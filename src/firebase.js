import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAyQMN6qadOC3hpVPB6Q2d9Hw30z0vhJZ4",
    authDomain: "saint-michael-learn.firebaseapp.com",
    projectId: "saint-michael-learn",
    storageBucket: "saint-michael-learn.appspot.com",
    messagingSenderId: "204030813654",
    appId: "1:204030813654:web:9d8af1cb4b2b8f0e32f077",
    measurementId: "G-LWE82B21BN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }