import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const config = {
    apiKey: "AIzaSyDHefMGoXfLa6INMPS6T3lhTuYCIWVl08s",
    authDomain: "raffle-fcba8.firebaseapp.com",
    projectId: "raffle-fcba8",
    storageBucket: "raffle-fcba8.appspot.com",
    messagingSenderId: "784568688502",
    appId: "1:784568688502:web:8432abcf6f95afa864a457",
    measurementId: "G-YPCJSR44SL"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const firestore = firebase.firestore();

export { firestore };