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

//signOut

function signOut(){
  auth.signOut();
  alert("Signed Out!");
}
