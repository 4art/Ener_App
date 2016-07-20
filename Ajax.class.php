<?php
	include 'DB.php';
	/**
	* 
	*/
	class Ajax extends DB
	{
		private $action;
		private $term;
		function __construct()
		{
			# 
			if (isset($_REQUEST['action'])) {
				# code...
				$this->action=$_REQUEST['action'];
			}
			parent::__construct();
		}
		public function checkReq()
		{
			# check request
			if ($this->action!='') {
				# if isset
				$method=$this->action.'Action';
				$this->connect();
				$this->$method();
				$this->disconnect();
			}
		}
		public function getProdAction()
		{
			# select from DB
			$arr=$this->getArray("SELECT * FROM products WHERE label LIKE '%".$_GET['term']."%'");
			$arr=json_encode($arr);
			echo($arr);

		}
		public function setProdAction()
		{
			# get JSON
			$a=0;
			$rest_json = file_get_contents("php://input");
			$rest_vars = json_decode($rest_json, true);
			//echo($rest_vars['items'][0]['label']);

			###data processing
			$label=strtolower($rest_vars['items'][0]['label']);
			$label=trim($label, "\x00..\x1F");
			$protein=$rest_vars['items'][0]['protein']/100;
			$fat=$rest_vars['items'][0]['fat']/100;
			$carbo=$rest_vars['items'][0]['carbonates']/100;
			$kcal=$rest_vars['items'][0]['kcal']/100;
			
			### insert data into DB
			$count=$this->getArray("SELECT count(*) FROM products");
			$names=$this->getArray("SELECT label FROM products");
			//echo($names[0]['label']);
			for ($i=0; $i < $count[0][0]; $i++) { 
				if ($names[$i]['label']==$label) {
					$a++;
				}
			}
			if ($a==0) {
				$sql="INSERT INTO `products` (`label`, `protein`, `fat`, `carbo`, `kcal`) VALUES ('".$label	."', '".$protein."', '".$fat."', '".$carbo."', '".$kcal."')";	
				$status=$this->set($sql);	
				
			}
		}
		public function get($value)
		{
			# get as public
			return $value;
		}

	}
?>