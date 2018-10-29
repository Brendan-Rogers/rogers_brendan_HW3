<?php

$host = "localhost";
$user = "root";
$password = "root";
$db = "db_deepdream";

$conn = mysqli_connect($host, $user, $password, $db);

// ISSET checks to see if the condition isn't NULL
if (isset($_GET["year"])) {
	// $_GET checks the URL for a "Superglobal" variable. This is a fancy way of passing information from our JS to our PHP, using the URL. In this example, our JS sets the "targetURL" to include "?year=${this.id}", where this.id corresponds with a row name in our database. it's just a clever way of linking these three technologies
    $ref = $_GET["year"];

    $myQuery = "SELECT * FROM tbl_timeline WHERE year='$ref'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    //Fill the array with the result set and send it to the browser
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}


?>