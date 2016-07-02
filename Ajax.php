<?php
	//error_reporting(0);
	require_once 'DB.php';
	
	$obj=new DB();
	$obj->connect();
	$arr=$obj->getArray("SELECT * FROM products WHERE label LIKE '%".$_GET['term']."%'");
	//print_r($arr);
	echo(json_encode($arr));
	$obj->disconnect();
?>