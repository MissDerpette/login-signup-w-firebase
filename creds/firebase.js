
  //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
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
  const auth = getAuth();

  // Getting all the objectsof HTML for Sign Up
  firstName = document.getElementById('si-fname')
  lastName = document.getElementById('si-lname')
  email = document.getElementById('si-email')
  password = document.getElementById('si-password')

  //making a function for storing data
windows.signUp = function(e){
    e.preventDefault();
    let obj = {
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value,
        password : password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
        alert('Sign up succesful!')
    })
    .catch(function(err) {
        alert("error" * err)
    })
    console.log(obj)
};
