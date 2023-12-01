
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  


  // TODO: Add SDKs for Firebase products that you want to uske
  // https://firebase.google.com/docs/web/setup#available-libraries

  //Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXsetcdRknQStr93AccQye9ap1BUxocRg",
    authDomain: "login-56eea.firebaseapp.com",
    projectId: "login-56eea",
    storageBucket: "login-56eea.appspot.com",
    messagingSenderId: "118447917365",
    appId: "1:118447917365:web:d37cff3368d9d4c42f247c"
  };

//Initialize Firebase
  const app = initializeApp(firebaseConfig);
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  const auth = getAuth();

  // Getting all the objectsof HTML
  var firstName = document.getElementById('si-fname')
  var lastName = document.getElementById('si-lname')
  var email = document.getElementById('si-email')
  var password = document.getElementById('si-password')

  function checkFirebaseConnection() {
    // Check if Firebase app is already initialized
    if (getApps().length === 0) {
      initializeApp(firebaseConfig); // Initialize Firebase app
    }
  
    // Check the connection status
    const isConnected = getApps()[0]?.INTERNAL?.token !== null;
  
    // Return the connection status
    return isConnected;
  }
  
  alert('Logged in successfully!')


  //making a function for storing data
window.signUp = function(e){
    e.preventDefault();
    let obj = {
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value,
        password : password.value,
    }
    // signInWithEmailAndPassword(auth, obj.email, obj.password)
    // createUserWithEmailAndPassword()

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
        alert('Sign up succesful!')
    })
    .catch(function(err) {
        alert("Error in " + err)
    })
    console.log(obj)

};

