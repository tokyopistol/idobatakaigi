import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBA6wzQ1xr8uQcow2SHhjYqtHANrCJzOOc",
  authDomain: "idobatakaigi-with-ta.firebaseapp.com",
  projectId: "idobatakaigi-with-ta",
  storageBucket: "idobatakaigi-with-ta.appspot.com",
  messagingSenderId: "947083580229",
  appId: "1:947083580229:web:150d1bcfd9e5727dace42c"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};