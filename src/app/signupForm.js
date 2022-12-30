import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'



export const signup=()=>{
const signupForm = document.querySelector('#registro')
console.log('funciona signup')
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    // let signupName = signupForm['signup-name'].value
    let signupEmail = signupForm['signup-email'].value
    let signupPassword = signupForm['signup-password'].value
    console.log(signupEmail, signupPassword)

    try {
       const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
       console.log(userCredential)
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err))

    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            alert('Este correo ya está en uso')
        }else if (error.code === 'auth/weak-password'){
            alert('Tu contraseña es muy débil')
        }else if (error.code === 'auth/invalid-email'){
            alert('Este correo es inválido')
        }
    }

})

}
