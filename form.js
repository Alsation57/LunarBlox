const firebaseConfig = {
  apiKey: "AIzaSyDOEKHHBjZO16DYNlqkieEI7ixh7rTHbqc",
  authDomain: "authentificationapp-ae71b.firebaseapp.com",
  databaseURL: "https://authentificationapp-ae71b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentificationapp-ae71b",
  storageBucket: "authentificationapp-ae71b.appspot.com",
  messagingSenderId: "754101945006",
  appId: "1:754101945006:web:97f81aea78affaba56a33f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //
  promise.catch(e=>alert(e.message));
  alert("SignUp Successfully");
  window.open("https://lunar-blox.xyz/dashboard.html", "_self")
}

//signIN function
function  signIn(){
  var email = document.getElementById("email");
  var password  = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
}


//signOut

function signOut(){
  auth.signOut();
  alert("Signed Out!");
}

//active user to homepage
const emailDisplay = document.getElementById("emailDisplay");

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    window.open("https://lunar-blox.xyz/dashboard.html", "_self");
    canOnlyFireOnce()
    var email = user.email;
    emailDisplay.innerText = email;
  }else{
      
  }
})
