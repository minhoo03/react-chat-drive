import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD-OKPnqReFFiW3v-v3VPwGelWNR97oycE",
    authDomain: "chat-and-drive.firebaseapp.com",
    projectId: "chat-and-drive",
    storageBucket: "chat-and-drive.appspot.com",
    messagingSenderId: "1094346769521",
    appId: "1:1094346769521:web:cb38793d5c0e6cc3b507d0",
    measurementId: "G-CYT2TDQXE0"
};


firebase.initializeApp(firebaseConfig);