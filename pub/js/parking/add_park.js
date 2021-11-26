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
 
 let p_id = document.getElementById('pid');
 let p_name = document.getElementById('pname');
 let p_depart = document.getElementById('pdepart');
 let p_lat = document.getElementById('lat');
 let p_long = document.getElementById('long');
 let p_desc = document.getElementById('descrip');
 let p_stat = document.getElementById('p_stat');
 let p_utyp = document.getElementById('p_utyp');
 let instbtn = document.getElementById('sub_btn');
 let upbtn = document.getElementById('update_btn');
 let delbtn = document.getElementById('delete_btn');


/* add parking form */
 
async function Add_park_Document_CostumID(){
 
  var ref = doc(db,"ParkingLots",p_id.value);
  const docRef = await setDoc(
    ref,{
      Id: p_id.value,
      SlotName: p_name.value,
      Department: p_depart.value,
      Latitude: p_lat.value,
      Longitude: p_long.value,
      SlotDescription: p_desc.value,
      Status: p_stat.value,
      UserType: p_utyp.value,
     
    }
  )
  .then(()=>
  {
    alert ("data has been saved !");
     
    
  })
  .catch((error) =>{
    alert ("data was not been saved, error !" + error);
  });
  location.reload();
      return false;
}
async function Get_park_Document(){

  var ref = doc(db,"ParkingLots",p_id.value);
  const docSnap = await getDoc(ref);

  if(docSnap.exists()){
    p_id.value = docSnap.data().Id;
    p_name.value = docSnap.data().SlotName
   p_depart.value = docSnap.data().Department;
    p_lat.value = docSnap.data().Latitude;
    p_long.value = docSnap.data().Longitude;
    p_desc.value= docSnap.data().SlotDescription;
    p_stat.value = docSnap.data().Status;
    p_utyp.value= docSnap.data().UserType;
  }
  else
  {
    alert("no such documents");
  }

 }
 
async function Update_park_Document(){
  var ref = doc(db,"ParkingLots",p_id.value);
  await updateDoc
  (
    ref,{
      Id: p_id.value,
      SlotName: p_name.value,
      Department: p_depart.value,
      Latitude: p_lat.value,
      Longitude: p_long.value,
      SlotDescription: p_desc.value,
      Status: p_stat.value,
      UserType: p_utyp.value,
     

    }
  )
  .then(()=>{
    alert ("data has been Updated !");
  })
  .catch((error) =>{
   alert ("data was not successfully updated, error !" + error);
  });
   location.reload();
      return false;
}

async function delete_park_Document(){  
  var ref = doc(db,"ParkingLots",p_id.value);
  const docSnap = await getDoc(ref);

  if(!docSnap.exists())
  {
    alert("Documents does not exist !");
    return;
  }
  await deleteDoc(ref)
  .then(()=>{
    alert ("data has deleted successfully !");
  })
  .catch((error) =>
  {
    alert ("data was not successfully deleted, error !" + error);
  }); 
   location.reload();
      return false;
}


/* buttons */
if(instbtn){
  instbtn.addEventListener("click", Add_park_Document_CostumID);
}
if(upbtn){
  upbtn.addEventListener("click", Update_park_Document);
}
if(delbtn){
  delbtn.addEventListener("click", delete_park_Document);

}
if(delbtn){
  delbtn.addEventListener("click", delete_park_Document);

}