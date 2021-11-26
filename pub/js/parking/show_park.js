/*table functions */
var parking_num= 0;
var tbody = document.getElementById('tbody1');



function add_modal(id){

  var modal = document.getElementById("modal15");
  var btn = document.getElementById("add_btn");
  var span = document.getElementsByClassName("close")[0];
  document.getElementById('pid').value = id;
  document.getElementById('pid').disabled = true;


  modal.style.display = "block";
  

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
      location.reload();
      return false;
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
        location.reload();
      return false;
    }
  }
}

function load_modal(u){


  edit_data(u);
  document.getElementById("pid").disabled = true;
  var modal = document.getElementById("modal15");
  var btn = document.getElementById("edit");

  var span = document.getElementsByClassName("close")[0];
 
    modal.style.display = "block";
   
   
 
  btn.onclick = function() {

  modal.style.display = "block";
   
}
  span.onclick = function() {
     location.reload();
      return false;
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        location.reload();
      return false;
      modal.style.display = "none";
      
    }

}
}
function Add_park_table(Id,parkname,parkdepart,parklat,parklong,parkdesc,parkstat){

var trow = document.createElement("tr");
var td1 = document.createElement('td') ;
var td2 = document.createElement('td') ;
var td3 = document.createElement('td') ;
var td4 = document.createElement('td') ;
var td5 = document.createElement('td') ;
var td6 = document.createElement('td') ;
var td7 = document.createElement('td') ;

var td8 = document.createElement('td') ;
 

var td9 = document.createElement("BUTTON") ;
var td10 = document.createElement('BUTTON') ;

td9.classList.add("btn","btn-primary");
td9.setAttribute('id','edit');
td9.setAttribute('value',Id);
td9.onclick = function() {load_modal(this.value)};

td10.classList.add("btn","btn-danger");
td10.setAttribute('id','delete');
td10.setAttribute('value',Id);
td10.onclick = function() {delete_park_Document(this.value)};


td1.innerHTML= ++parking_num;
td2.innerHTML = Id;
td3.innerHTML = parkname;
td4.innerHTML = parkdepart;
td5.innerHTML = parklat;  
td6.innerHTML = parklong;
td7.innerHTML = parkdesc;
td8.innerHTML = parkstat;
td9.innerHTML = "EDIT";
td10.innerHTML = "DELETE";


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

tbody.appendChild(trow);

}

function add_all_park_data(parkinglist){
parking_num = 0;
tbody.innerHTML = "";

parkinglist.forEach(element =>{
  Add_park_table
    (element.Id,
    element.SlotName,
    element.Department,
    element.Latitude,
    element.Longitude,
    element.SlotDescription,
    element.Status);
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

  
let pid = document.getElementById('pid');
 let pname = document.getElementById('pname');
 let pdepart = document.getElementById('pdepart');
 let lat = document.getElementById('lat');
 let long = document.getElementById('long');
 let descrip = document.getElementById('descrip');
 let p_stat = document.getElementById('p_stat');


let delbtn = document.getElementById('delete');
let upbtn = document.getElementById('update_btn');
let addbtn = document.getElementById('add_btn');
let regbtn = document.getElementById('reg_btn'); 

 
async function Add_park_Document_CostumID(){
  
  var ref = doc(db,"ParkingLots",pid.value);
  const docRef = await setDoc(
          ref,{
          Id: pid.value,
          SlotName: pname.value,
          Department: pdepart.value,
          Latitude: lat.value,
          Longitude: long.value,
          SlotDescription: descrip.value,
          Status: p_stat.value
        
          })
          .then(()=>{
           Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data has been Saved !',
            showConfirmButton: false,
            timer: 1500
          })
          })
          .catch((error) =>{
           Swal.fire("data was not updated, error !");
          });
    }
    
async function get_all_park_data(){

    const querySnapshot = await getDocs(collection(db,"ParkingLots"));
    var parking = [];
  
    querySnapshot.forEach(doc => {
      parking.push(doc.data());
    });
    add_all_park_data(parking);
  }
window.onload = get_all_park_data;

async function verify_park_data(){

const querySnapshot = await getDocs(collection(db,"ParkingLots"));
var parking_val = [];

  querySnapshot.forEach(doc =>{
    parking_val.push(doc.data());
  });

 

  const idExist = parking_val.some(park => park.Id === pid.value);
  const longExist = parking_val.some(park => park.Longitude === long.value);
  const latExist = parking_val.some(park => park.Latitude === lat.value);
  if(idExist && longExist && latExist)
  {
    Swal.fire("Parking ID and the location of the Parking slot is already exist in the system !");
  }
  else if(longExist && latExist)
  {
    Swal.fire("Location of the Parking slot is already exist in the system !");
  }
  else if(!(idExist && longExist && latExist)){
    Add_park_Document_CostumID();
  }

}
async function auto_id(){
  
  const querySnapshot = await getDocs(collection(db,"ParkingLots"));
  var parking_val = [];

  querySnapshot.forEach(doc =>{
  parking_val.push(doc.data());
  });
 const high_id = Math.max.apply(Math,parking_val.map(function(ques){return ques.Id;}))

 var newid = high_id +1;
 if(parking_val.length == 0){
  newid = 1;
 }

 add_modal(newid); 
 
  
}

async function edit_data(ids){

  var ref = doc(db,"ParkingLots",ids);
  const docSnap = await getDoc(ref);

  
    pid.value = docSnap.data().Id;
    pname.value = docSnap.data().SlotName;
    pdepart.value = docSnap.data().Department;
    lat.value = docSnap.data().Latitude;
    long.value = docSnap.data().Longitude;
    descrip.value= docSnap.data().SlotDescription;
    p_stat.value= docSnap.data().Status;
    
 }
 async function Update_park_Document(){
  
  var ref = doc(db,"ParkingLots",pid.value);
  await updateDoc
  (
    ref,{
      SlotName: pname.value,
      Department: pdepart.value,
      Latitude: lat.value,
      Longitude: long.value,
      SlotDescription: descrip.value,
      Status: p_stat.value,
     
    

    }
  )
  .then(()=>{
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Data has been Updated!',
    showConfirmButton: false,
    timer: 1500
  })
  })
  .catch((error) =>{
   Swal.fire("data was not updated, error !");
  });
   
}
async function delete_park_Document(delid){  
  var ref = doc(db,"ParkingLots",delid);
  const docSnap = await getDoc(ref);
  
    if(!docSnap.exists())
    {
      Swal.fire("Documents does not exist !");
      return;
    }
    await deleteDoc(ref)
    .then(()=>{
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been Deteled !',
      showConfirmButton: false,
      timer: 2500
    })
    })
    .catch((error) =>
    {
      Swal.fire("data was not successfully deleted, error !" + error);
    });

      location.reload();
      return false;

   
   
}


if(upbtn){
  upbtn.addEventListener("click", Update_park_Document);
}
if(delbtn){
  delbtn.addEventListener("click", delete_park_Document);

}
if(addbtn){
  addbtn.addEventListener("click", auto_id);

}
if(regbtn){
  regbtn.addEventListener("click", verify_park_data);

}