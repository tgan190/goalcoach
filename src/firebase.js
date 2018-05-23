import * as firebase from 'firebase';

// sharing database with expensify-tracker-test
const config = {
  apiKey: "AIzaSyBrvfG3gpwhxCwF77r77zDh32pAVqXCtR8",
  authDomain: "expensify-tracker-test.firebaseapp.com",
  databaseURL: "https://expensify-tracker-test.firebaseio.com",
  storageBucket: "expensify-tracker-test.appspot.com",
  messagingSenderId: "343239028118"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
