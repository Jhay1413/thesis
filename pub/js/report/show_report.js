var parking_num= 0;
var tbody = document.getElementById('tbody1');

function Add_report_table(bookeddate,idnum,lat,long,name,plate,slotid,slotname,status,usercode,usertype,vehicledescription){

var trow = document.createElement("tr");
var td1 = document.createElement('td') ;
var td2 = document.createElement('td') ;
var td3 = document.createElement('td') ;
var td4 = document.createElement('td') ;
var td5 = document.createElement('td') ;
var td6 = document.createElement('td') ;
var td7 = document.createElement('td') ;
var td8 = document.createElement('td') ;
var td9 = document.createElement('td') ;   
var td10 = document.createElement('td') ;   
var td11 = document.createElement('td') ;   
var td12 = document.createElement('td') ;   
var td13 = document.createElement('td') ;   


td1.innerHTML= ++parking_num;
td2.innerHTML = bookeddate;
td3.innerHTML = idnum;
td4.innerHTML = lat;  
td5.innerHTML = long;
td6.innerHTML = name;
td7.innerHTML = plate;
td8.innerHTML = slotid;
td9.innerHTML = slotname;
td10.innerHTML = status;
td11.innerHTML = usercode;
td12.innerHTML = usertype;
td13.innerHTML = vehicledescription;


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
trow.appendChild(td12);
trow.appendChild(td13);



tbody.appendChild(trow);

}

function add_all_report_data(rep_data){
parking_num = 0;
tbody.innerHTML = "";

rep_data.forEach(element =>{
  Add_report_table
    (element.bookedDate,
    element.idnumber,
    element.lat,
    element.long,
    element.name,
    element.plateNumber,
    element.slotId,
    element.slotName,
    element.status,
    element.userCode,
    element.userType,
    element.vehicleDescription);
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

async function get_all_report_data(){

    const querySnapshot = await getDocs(collection(db,"ReserveSlots"));
    var data = [];
  
    querySnapshot.forEach(doc => {
      data.push(doc.data());
    });
    add_all_report_data(data);
  }
window.onload = get_all_report_data;