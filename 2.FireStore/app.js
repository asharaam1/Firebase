import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');


form.addEventListener('submit', async (event) => {
  event.preventDefault()
  console.log(title.value);
  console.log(description.value);


  //ya code yaad karne ki zarorat nhi ap documentary se utha lein
  try {
    const docRef = await addDoc(collection(db, "todos"), {   //collection() => es ma 2 arguments diye han hamne ek "db" jo database ha or dosra string ma name mtlb jis name se collection banana ha hame firestore ma
      title: title.value,
      description: description.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


})