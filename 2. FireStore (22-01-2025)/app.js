//? (22-01-2025)
import {
  collection,
  addDoc,
  Timestamp,
  getDocs, 
  query, 
  orderBy, 
  doc, 
  deleteDoc, 
  updateDoc
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

const allTodo = []

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const div = document.querySelector('.container');

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  console.log(title.value);
  console.log(description.value);


  //ya code yaad karne ki zarorat nhi ap documentary se utha lein
  try {
    const docRef = await addDoc(collection(db, "todos"), {   //collection() => es ma 2 arguments diye han hamne ek "db" jo database ha or dosra string ma name mtlb jis name se collection banana ha hame firestore ma
      title: title.value,
      description: description.value,
      date: Timestamp.fromDate(new Date())
    });
    console.log("Document written with ID: ", docRef.id);

    allTodo.unshift({
      title: title.value,
      description: description.value,
      date: Timestamp.fromDate(new Date()),
      id: docRef.id
    })

    renderData(allTodo)
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }


})





//? (24-01-2025) friday class

// get data from database
async function getData() {
  const q = query(collection(db, "todos"), orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, doc.data());
    allTodo.push({ ...doc.data(), id: doc.id });
  });

  console.log(allTodo);
  renderData(allTodo)
}





//? (27-01-2025) monday 
//no class due to saudi Ambassador aye hue tha 





// 61 
//? (29-01-2025) wednesday

// renderData
function renderData(arr) {
  div.innerHTML = ""
  arr.map(item => {
    div.innerHTML += `
    <div class="box">
    <p>Title: ${item.title}</p>
    <p>description: ${item.description}.</p>
    <button class="deleteBtn">delete</button>
    <button class="editBtn">edit</button>
    </div>
    `
  })

  const deleteBtn = document.querySelectorAll('.deleteBtn')
  const editBtn = document.querySelectorAll('.editBtn')


  deleteBtn.forEach((item, index) => {
    item.addEventListener('click', async (event) => {
      console.log("btn clicked");
      console.log(allTodo[index]);
      await deleteDoc(doc(db, "todos", allTodo[index].id));
      console.log('todo deleted...');
      allTodo.splice(index, 1)
      renderData(allTodo)
    })
  })
  editBtn.forEach((item, index) => {
    item.addEventListener('click', async (event) => {
      console.log("edit clicked");
      console.log(allTodo[index]);
      const updatedTitle = prompt("enter updated title")

      const todoRef = doc(db, "todos", allTodo[index].id);
      await updateDoc(todoRef, {
        title: updatedTitle
      });
      console.log('todo updated successfully');
      allTodo[index].title = updatedTitle
      renderData(allTodo)
    })
  })
}

getData()


// delete and edit