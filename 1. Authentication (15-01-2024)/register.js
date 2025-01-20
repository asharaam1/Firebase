//? (15-01-2025)
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";     //es line ma import kia ha hamane firebaseconfig.js ki file se

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const p = document.querySelector("#error");



form.addEventListener("submit", event => {
    event.preventDefault();
    p.innerHTML = ""
    console.log(email.value);
    console.log(password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            p.innerHTML = errorMessage
        });

})




//? (17-01-2025)
// Authentication Topic Completed, login Register completed == code not pushed

//todo Task: Shuffle Array on every refresh JS task