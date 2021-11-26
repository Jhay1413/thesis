<?php include 'header.php'?>  

<main class="mt-5 pt-3">
  <div class="container-fluid">
    <h1 class="h2">List of Parking Lots</h1>
  </div>
  <div class="container">
        <div class="searh_bar">
          <div class="input-group rounded">
             <span class="input-group-text border-0" id="search-addon">
          
             <i class="fas fa-search"></i>
              </span>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="myInput" onkeyup='searchTable()'>
          </div>
        </div>
  <Br>
  <div class="table-page">
      <div class="table-wrapper-scroll-y my-custom-scrollbar" id="table_user">
        <table class="table table-bordered table-striped mb-0" id="myTable">
  
            <thead>
               <tr id='tableHeader'>
              <th>Parking Number</th>
              <th >Parking ID</th>
              <th >Parking Lot Name</th>
              <th>Parking Department</th>
              <th >Latitude</th>
              <th >Longitude</th>
              <th>Parking Description</th>
              <th>Parking Status</th>
              <th>Parking User Access</th>
            
            
              </tr>  
            </thead>
            <tbody id="tbody1"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <br>
  <Br>
  <div class="button">
   
       <button class="btn btn-primary" id="add_btn">Add Parking</button>
    
  </div>

  <div class="modal14" id="modal15">
    <div class="modal11" id="modal12">
      <div class="form-page">
        <span class="close">&times;</span>
        <br>
        <br>
        <div class="form-group row">
          <div class="form-group col-md-6"> 
              <label for="formGroupExampleInput">Parking Lot ID</label>
              <input type="number" class="form-control" name ="park_id" id="pid" placeholder="Parking Lot ID">
          </div>
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Parking Lot Name</label>
            <input type="text" class="form-control" name ="park_name" id="pname" placeholder="Parking Lot Name">
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-md-6form-group col-md-6">
            <label for="formGroupExampleInput2">Latitude</label>
            <input type="number" class="form-control" name ="lat" id="lat" placeholder="Latitude">
          </div>
           <div class="form-group col-md-6">
            <label for="formGroupExampleInput2">Longitude</label>
            <input type="number" class="form-control" name ="long" id="long" placeholder="Longitude">
          </div>
        </div>
       <div class="form-group row">
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Parking Lot Department</label>
              <select class="form-select" aria-label="Default select example" id="pdepart" type="text">
                <option selected>Select Department</option>
                <option value="ADMIN">Admin Department</option>
                <option value="IT">IT Department</option>
                <option value="STUDENT">Auditorium</option>
                <option value="STUDENT">Graduate School</option>
                 <option value="STUDENT">Highschool</option>
               </select>
          </div>
        
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput2">Parking lot Status</label>
              <select class="form-select" aria-label="Default select example" id="p_stat">
                <option selected>Select status</option>
                <option value="VACANT">Vacant</option>
                <option value="NOT AVAILABLE">No Vacant</option>
              </select>
          </div>
        </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Parking lot Description</label>
                    <input type="text" class="form-control" name ="descript" id="descrip" placeholder="Parking lot Description">
                </div>
                <br>
                
                <button class="btn btn-primary" id="reg_btn" >Add</button>
                <button class="btn btn-primary" id="update_btn" >Update</button>
                
               
            </div> 
          </div>
        </div>
      </div>
</main>
<script src="./js/parking/show_park.js" type="Module"></script>

<script type="text/javascript">

function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else if (!tr[i].id.match('^tableHeader')) {
            tr[i].style.display = "none";
        }
    }
}
</script>

<?php include 'footer.php'?>






