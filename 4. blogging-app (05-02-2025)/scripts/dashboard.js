//? (10-02-2025) 
import { collection, addDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { auth, db } from "./firebaseconfig.js";


const form = document.querySelector('#itemForm');
const title = document.querySelector('#title');
const uploadWidget = document.querySelector('#upload_widget');

form.addEventListener




//tree.js website 3d web making
//udemy se sekh sakhte haan
//barba.js animation libraray leaning
//font of iphone feels premium
//font apple => developer.apple.com



let uploadedImageUrl = "";


var myWidget = cloudinary.createUploadWidget({
    cloudName: '...',
    uploadPreset: '...'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        uploadedImageUrl = result.info.secure_url
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function (e) {
    e.preventDefault()
    myWidget.open();
}, false);




// const form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");

    try {
        const docRef = await addDoc(collection(db, "usersblog"), {
            title: title.value,
            description: description.value,
            profileImg: uploadedImageUrl,
            createdAt: new Date()

        });

        console.log("Document written with ID are sumbit of dashborad: ", docRef.id);
        window.location = 'index.html'
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }

})




