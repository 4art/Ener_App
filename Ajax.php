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
	elseif ($_REQUEST['action']==='set') {
		$rest_json = file_get_contents("php://input");
		$rest_vars = json_decode($rest_json, true);
		echo($rest_vars['items'][0]['label']);
		//print_r($rest_vars);
	}
?>