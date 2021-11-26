/*table functions */
var stud_num= 0;
var tbody = document.getElementById('tbody2');

function Add_user_table(Id,fname,lname,Email,contact,usertype,department){
let trow = document.createElement("tr");
let td1 = document.createElement('td') ;
let td2 = document.createElement('td') ;
let td3 = document.createElement('td') ;
let td4 = document.createElement('td') ;
let td5 = document.createElement('td') ;
let td6 = document.createElement('td') ;
let td7 = document.createElement('td') ;
let td8 = document.createElement('td') ;



td1.innerHTML= ++stud_num;
td2.innerHTML = Id;
td3.innerHTML = fname;
td4.innerHTML = lname;
td5.innerHTML = Email;
td6.innerHTML = contact;
if(usertype == 2){
  var usertypes = "Student";
  td7.innerHTML = usertypes;
}
else if(usertype == 1){
  var usertypes = "Employee";
  td7.innerHTML = usertypes;
}

td8.innerHTML = department;


trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
trow.appendChild(td8);
tbody.appendChild(trow);

}
function add_all_user_data(userlist){
stud_num = 0;
tbody.innerHTML = "";

userlist.forEach(element =>{
  Add_user_table
    (element.IdNumber,
    element.FirstName,
    element.LastName,
    element.Email,
    element.PhoneNumber,
    element.UserType,
    element.Department);
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
 
async function get_all_user_data(){
  
    const querySnapshot = await getDocs(collection(db,"OutSourceData"));
    var user = [];
  
    querySnapshot.forEach(doc => {
      user.push(doc.data());
    });
  
    add_all_user_data(user);
  }
window.onload = get_all_user_data;

