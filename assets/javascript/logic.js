// Initialize Firebase
var config = {
    apiKey: "AIzaSyChmD1BAQX4a85xpgbUEqCJpTJzcy84K_I",
    authDomain: "train-scheduler-61757.firebaseapp.com",
    databaseURL: "https://train-scheduler-61757.firebaseio.com",
    projectId: "train-scheduler-61757",
    storageBucket: "train-scheduler-61757.appspot.com",
    messagingSenderId: "1057688595409"
  };
  firebase.initializeApp(config);

//Create a variable to reference the database
var database = firebase.database();

//Initial Values
var trainname = "";
var destination = "";
var firsttime = "";
var frequency = "";