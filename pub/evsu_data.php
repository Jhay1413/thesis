<?php include 'header.php'?> 

   <main class="mt-5 pt-3">
      <div class="container">
          <h1 class="h2">EVSU Imported Data</h1>
      </div>
      <div class="container">
        <div class="searh_bar">
          <div class="input-group rounded">
             <span class="input-group-text border-0" id="search-addon">
          
             <i class="fas fa-search"></i>
              </span>
            <input class="form-control mr-sm-2" type="search" placeholder="Search User ID" aria-label="Search" id="myInput" onkeyup="myFunction()">
           
           
          </div>
        </div>
      <Br>
          <div class="table-page">
            <div class="table-wrapper-scroll-y my-custom-scrollbar" id="table_user">
              <table class="table table-bordered table-striped mb-0" id="myTable">
             
                <thead>
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                     <th scope="col">User Access</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>

                <tbody id="tbody2"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="input-group rounded">
 

    </main>

<script src="./js/user/show_fuser.js" type="Module"></script>
<script type="text/javascript">

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i <= tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script>
<?php include 'footer.php'?>






