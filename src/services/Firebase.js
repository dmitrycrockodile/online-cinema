import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
   apiKey: "AIzaSyC3_t4WrEahOoMPKks8dUX9Y1spJnSTo00",
   authDomain: "auth-cinemadev.firebaseapp.com",
   projectId: "auth-cinemadev",
   storageBucket: "auth-cinemadev.appspot.com",
   messagingSenderId: "835314242750",
   appId: "1:835314242750:web:625cfed827e5991fa2baef"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;