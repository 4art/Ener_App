<?php
	
	include 'Ajax_data.php';
	$obj=new Ajax_data();
	$obj->checkReq();
	//error_reporting(0);
	/*require_once 'DB.php';
	if ($_REQUEST['action']==='getProd') {
			# code...
		$obj=new DB();
		$obj->connect();
		$arr=$obj->getArray("SELECT * FROM products WHERE label LIKE '%".$_GET['term']."%'");
		//$arr=$obj->getArray("SELECT count(*) FROM products");
		//print_r($arr);
		echo(json_encode($arr));
		$obj->disconnect();
		}	
	elseif ($_REQUEST['action']==='setProd') {
		$a=0;
		$rest_json = file_get_contents("php://input");
		$rest_vars = json_decode($rest_json, true);
		//echo($rest_vars['items'][0]['label']);
		$label=strtolower($rest_vars['items'][0]['label']);
		$label=trim($label, "\x00..\x1F");
		$protein=$rest_vars['items'][0]['protein']/100;
		$fat=$rest_vars['items'][0]['fat']/100;
		$carbo=$rest_vars['items'][0]['carbonates']/100;
		$kcal=$rest_vars['items'][0]['kcal']/100;
		//echo "label:",$label,", protein:",$protein,", fat: ",$fat,", carbo:",$carbo,", kcal:",$kcal;
		$setDB=new DB();
		$setDB->connect();
		$count=$setDB->getArray("SELECT count(*) FROM products");
		$names=$setDB->getArray("SELECT label FROM products");
		//echo($names[0]['label']);
		for ($i=0; $i < $count[0][0]; $i++) { 
			if ($names[$i]['label']==$label) {
				$a++;
			}
		}
		if ($a==0) {
			$sql="INSERT INTO `products` (`label`, `protein`, `fat`, `carbo`, `kcal`) VALUES ('".$label."', '".$protein."', '".$fat."', '".$carbo."', '".$kcal."')";
			$status=$setDB->set($sql);
			/*pdo
			$setDB->setProducts($label, $protein, $fat, $carbo, $kcal);
			*/
		/*}
		$setDB->disconnect();
		/*if($status==false){
			echo "error";
		}*/
		//print_r($rest_vars);
		//echo($count[0][0]);
	//}

?>