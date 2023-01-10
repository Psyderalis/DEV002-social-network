import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

export const observador = () => {

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user in")
    console.log(user)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log("user off")
    // User is signed out
    // ...
  }
});
};