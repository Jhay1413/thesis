 <?php session_start();?>
<?php include 'header.php'?>



<main class="mt-5 pt-3">
      <div class="container-fluid">
        <h1 class="h2">User Information</h1>
    </div>
    <div class="container">
        <?php
        if(isset($_SESSION['success'])):?>
        <div class="alert alert-success" role="alert">
                <?php echo $_SESSION['success'];
            ?>
        </div>
         <?php elseif(isset($_SESSION['error'])):?>
        <div class="alert alert-warning" role="alert">
                <?php echo $_SESSION['error'];               
            ?>
        </div>
    <?php endif;?>
    <?php  session_destroy ();
            ?> 
       
    
    <div class="container">
        <div id="table-park">
            
           
            <input type="file" class="form-control-file" id="fileupload" name="fileupload"><br><br>
            <button type="button" class="btn btn-success" onclick="savefile()">Save File</button>
            <button type="button" class="btn btn-info" id="load_data">Load Data</button>
            
           
            
        </div>
    </div>
     <div id="table-park">
    
    </div>
    <br>
    <button type="button" class="btn btn-danger" name="load_data" id="imp_data">Import Data</button>
               
</main>
<script src="./js/school_data/fire_json.js" type="Module"></script>
<script type="text/javascript">
                async function savefile(){
                    let formData = new FormData();
                    formData.append("file", fileupload.files[0]);
                    await fetch('./php/upload.php',{method: "POST", body: formData});
                    location.reload();
                    return false;
                }
            </script>
<script>
$(document).ready(function(){
 $('#load_data').click(function(){
  $.ajax({
   url:"./upload/out_data.csv",
   dataType:"text",
   success:function(data)
   {
    var user_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table-striped mb-0" id="table">';
    for(var count = 0; count<user_data.length; count++)
    {
     var cell_data = user_data[count].split(',');
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
    $('#table-park').html(table_data);
   }
  });
 });
 
});
</script>

<?php include 'footer.php'?>






