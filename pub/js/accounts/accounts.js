/*table functions */
var stud_num= 0;
var tbody = document.getElementById('tbody2');

function Add_account_table(Id,fname,lname,department,Email,password,contact,rating,transaction,usertype){
let trow = document.createElement("tr");
let td1 = document.createElement('td') ;
let td2 = document.createElement('td') ;
let td3 = document.createElement('td') ;
let td4 = document.createElement('td') ;
let td5 = document.createElement('td') ;
let td6 = document.createElement('td') ;
let td7 = document.createElement('td') ;
let td8 = document.createElement('td') ;
let td9 = document.createElement('td') ;
let td10 = document.createElement('td') ;
let td11 = document.createElement('td') ;



td1.innerHTML= ++stud_num;
td2.innerHTML = Id;
td3.innerHTML = fname;
td4.innerHTML = lname;
td5.innerHTML = department;
td6.innerHTML = Email;
td7.innerHTML = password;
td8.innerHTML = contact;
td9.innerHTML = rating;
td10.innerHTML = transaction;
td11.innerHTML = usertype;

trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
trow.appendChild(td8);
trow.appendChild(td9);
trow.appendChild(td10);
trow.appendChild(td11);

tbody.appendChild(trow);

}
function add_all_account_data(userlist){
stud_num = 0;
tbody.innerHTML = "";

userlist.forEach(element =>{
  Add_account_table
    (element.IdNumber,
    element.Firstname,
    element.Lastname,
    element.Department,
    element.Email,
    element.Password,
    element.PhoneNumber,
    element.Rating,
     element.Transaction,
    element.UserType);
});
}

/* Firestore Config */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnB4m9ZJ6eMhsrnAp8OJZa1rvauX6yzJ0",
  authDomain: "parkzone-92304.firebaseapp.com",
  projectId: "parkzone-92304",
  storageBucket: "parkzone-92304.appspot.com",
  messagingSenderId: "383322692042",
  appId: "1:383322692042:web:768651fa093ee57f80d733",
  measurementId: "G-V8BB4BHHBN"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import  {getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField}
from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

const db = getFirestore();
 
async function get_all_account_data(){
  
    const querySnapshot = await getDocs(collection(db,"UserProfile"));
    var user = [];
  
    querySnapshot.forEach(doc => {
      user.push(doc.data());
    });
    add_all_account_data(user);
  }
window.onload = get_all_account_data;

