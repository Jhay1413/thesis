 <?php


    $connection = mysqli_connect("localhost","root","","users_info") or die("Error " . mysqli_error($connection));

     //fetch table rows from mysql db
    $sql = "select * from users";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    $fp = fopen('results.json', 'w');
    fwrite($fp, json_encode($emparray));
    fclose($fp);


    //close the db connection
    mysqli_close($connection);

?>