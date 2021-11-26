
   

//Firestore Config 
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

 
let btn=document.getElementById('imp_data');
  
async function transfer(){

  //gets table
  //gets table
  var oTable = document.getElementById('table');

  //gets rows of table
  var rowLength = oTable.rows.length;
  var num = "" ;
  var suc = 0;
  //loops through rows    
  for (var i = 1; i < rowLength; i++)
  {
//gets cells of current row  
    var oCells = oTable.rows.item(i).cells;

  //gets amount of cells of current row
    var cellLength = oCells.length;
    
       
       //loops through each cell in current row
  for(var j = 0; j < cellLength; j++)
       {

        //temporary data
        var userid;
        var fname ;
        var lname ;
        var email;
        var contact;
        var usertype;
        var department;

        //final data to be imported
        var fuserid
        var ffname;
        var flname;
        var femail;
        var fcontact;
       
        var fdepartment;

          for(var x = 0; x < cellLength; x++)
          {
            var cellVal = oCells.item(x).innerHTML;

            if(x == 1)
            {
             userid = cellVal;
              fuserid = userid.split('"').join('');
            }
            
            else if(x == 2 )
            {
              fname = cellVal;
               ffname = fname.split('"').join('');
            }
            else if(x == 3){
              lname = cellVal;
               flname = lname.split('"').join('');
            }
            else if(x == 4){
              email = cellVal;
              femail = email.split('"').join('');
            }
            else if(x == 5){
              contact = cellVal;
               fcontact = contact.split('"').join('');
         
            }else if(x == 6){
              
              if(cellVal = "Student"){
              usertype = 1;
              }
              else{
                usertype=2;
              }
            }
             else if(x == 7){
              department = cellVal;
              fdepartment = department.split('"').join('');
            }
          }
           var ref = doc(db,"OutSourceData",fuserid);
          const docRef = await setDoc(
            ref,
            {
               
               IdNumber: fuserid,
               FirstName: ffname,
               LastName: flname,
               Email : femail,
               PhoneNumber: fcontact,
               UserType:usertype,
               Department:fdepartment
            }
          )
        }
   
      } 
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Data has been Imported to server!',
    showConfirmButton: false,
    timer: 1500
  })
  }

    
if(btn){
    btn.addEventListener("click", transfer);
  }
   
  