import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCj4KGlQjw3hIlPY9yKKcCzps_FwDLBxW0",
    authDomain: "lovestoeat-8ec52.firebaseapp.com",
    databaseURL: "https://lovestoeat-8ec52.firebaseio.com",
    projectId: "lovestoeat-8ec52",
    storageBucket: "lovestoeat-8ec52.appspot.com",
    messagingSenderId: "992969808232"
  };

  export const firebaseApp = firebase.initializeApp(config);