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

function uname(){
  window.open("https://lunar-blox.xyz/dashboard", "_self")
}
//signOut

function signOut(){
  auth.signOut();
  alert("Signed Out!");
}

function buy(){
  alert("Coming Soon!");
}

const balanceDisplay = document.getElementById("bal");
const uname = document.getElementById("cname")

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = uname;
    balanceDisplay.innerText = email;
  }else{
      
  }
})
