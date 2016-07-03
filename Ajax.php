<?php
	//error_reporting(0);
	require_once 'DB.php';
	if ($_REQUEST['action']==='get') {
			# code...
		$obj=new DB();
		$obj->connect();
		$arr=$obj->getArray("SELECT * FROM products WHERE label LIKE '%".$_GET['term']."%'");
		//print_r($arr);
		echo(json_encode($arr));
		$obj->disconnect();
		}	
?>