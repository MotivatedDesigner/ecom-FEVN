import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = 
{
    apiKey: "AIzaSyBckLPHliqTiHyzrfKiphhAAaNp7eAp7vA",
    authDomain: "artisan-e01d8.firebaseapp.com",
    projectId: "artisan-e01d8",
    storageBucket: "artisan-e01d8.appspot.com",
    messagingSenderId: "798922855788",
    appId: "1:798922855788:web:55aef125a59e224086cf49",
    measurementId: "G-F4JVKVZ6JL"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}

