<?php
	include 'DB.php';
	/**
	* 
	*/
	class Ajax extends DB
	{
		private $action;
		private $term;
		private $name;
		private $email;
		private $password;
		private $hash;
		function __construct()
		{
			# 
			if (isset($_REQUEST['action'])) {
				# appropriate request t variables
				$this->action=$_REQUEST['action'];
				if (isset($_REQUEST['name'])) {
					$this->name=$_REQUEST['name'];
					
				}
				if (isset($_REQUEST['email'])) {
					# code...
					$this->email=$_REQUEST['email'];
				}
				if (isset($_REQUEST['password'])) {
					# code...
					$this->password=$_REQUEST['password'];
				}
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
		public function saveUserAction()
		{
			# save User
			
			//echo($this->name.', '.$this->email.', '.$this->password);
			//$this->hash=password_hash($this->password, PASSWORD_DEFAULT);
			$this->hash=password_hash($this->password, PASSWORD_DEFAULT);
			//echo($this->hash);
			$this->name=trim($this->name, "\x00..\x1F");
			$sql="INSERT INTO names (name, email, password) VALUES ('$this->name', '$this->email', '$this->hash')";
			$result=$this->set($sql);
				echo($result);
		}
		public function checkNameRegAction()
		{
			# code...
			$sql="SELECT name FROM names WHERE name='$this->name'";
			$arr=$this->getArray($sql);
			if ($arr==true) {
				# name is not uniq
				$val=1;
				echo($val);
			}
			else {
				$val=0;
				echo($val);
			}
		}
		public function checkEmailRegAction()
		{
			# code...
			$sql="SELECT email FROM names WHERE email='$this->email'";
			$arr=$this->getArray($sql);
			if ($arr==true) {
				# name is not uniq
				$val=1;
				echo($val);
			}
			else {
				$val=0;
				echo($val);
			}
		}
		public function get($value)
		{
			# get as public
			return $value;
		}

	}
?>