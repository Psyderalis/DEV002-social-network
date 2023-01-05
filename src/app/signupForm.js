import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js"

window.addEventListener('load', function () {
    // El archivo padre ha terminado de cargar

    const div = document.querySelector(".pantalla");
    const signupForm = div.querySelector("#registro");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = signupForm["signUpEmail"].value
        const password = signupForm["signUpPassword"].value
        console.log(email, password)

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)
        } catch (error) {
            console.log(error.message)
            console.log(error.code)

            if (error.code === "auth/email-already-in-use") {
                alert("Email already use")
            }
            else if (error.code === 'auth/invalid-email') {
                alert("Invalid email")
            } else if (error.code === "auth/weak-password") {
                alert("Password is too weak")
            }
            else if (error.code) {
                this.alert("Something went wrong")
            }

        }

    })

    //console.log(div, signupForm)
});



