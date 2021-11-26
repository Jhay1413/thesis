<?php include 'header.php'?>

<main class="mt-5 pt-3">
  <div class="container-fluid">
    <h1 class="h2">Reports</h1>
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
              <th>Num</th>
              <th >Booked Date</th>
              <th >ID number</th>
              <th>Latitude</th>
              <th >Longitude</th>
              <th >Name</th>
              <th>Plate Number</th>
              <th>Slot ID</th>
              <th>Slot Name</th>
              <th>Status</th>
              <th>User Code</th>
              <th>User Type</th>
              <th>Vehicle Description</th>
             
            
            
              </tr>  
            </thead>
            <tbody id="tbody1"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="./js/report/show_report.js" type="Module"></script>

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






