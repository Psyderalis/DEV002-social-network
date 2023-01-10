
import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { async } from "regenerator-runtime"
import { auth } from "./firebase.js";

//const signOutC = document.querySelector('#signout');

export const singOut = async () => {
  await signOut(auth);
  console.log('signOut');
};

  