import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDBtuRLI6jMr6uuBhbkX3knv1SHulXJw_0",
    authDomain: "fir-vue-bffdd.firebaseapp.com",
    databaseURL: "https://fir-vue-bffdd.firebaseio.com",
    projectId: "fir-vue-bffdd",
    storageBucket: "fir-vue-bffdd.appspot.com",
    messagingSenderId: "797333368771"
  })
 

  export const db = app.database();
  export const namesRef = db.ref('names');