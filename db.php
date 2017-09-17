<?php
$hostname='localhost';
$username='root';
$password='';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=stickercollections",$username,$password);

    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
    echo 'Connected to Database<br/>';

    $sql = "SELECT * FROM stickercollections";
foreach ($dbh->query($sql) as $row)
    {
    echo $row["collection_brand"] ." - ". $row["collection_year"] ."<br/>";
    }


    $dbh = null;
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }