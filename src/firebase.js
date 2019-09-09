import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyCG3LkuHeYrLgqaSSlPMROKPMqGSo2Z-SM",
    authDomain: "react-redux-slack-app.firebaseapp.com",
    databaseURL: "https://react-redux-slack-app.firebaseio.com",
    projectId: "react-redux-slack-app",
    storageBucket: "react-redux-slack-app.appspot.com",
    messagingSenderId: "554210678841",
    appId: "1:554210678841:web:a529e4adceb25bb70055e8"
};
// Initialize Firebase

firebase.initializeApp(config);

export default firebase;