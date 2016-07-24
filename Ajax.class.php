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
			session_start();
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
			$this->hash=password_hash($this->password, PASSWORD_DEFAULT, array("cost" => 10));
			//echo($this->hash);
			$this->name=trim($this->name, "\x00..\x1F");
			$this->name=strtolower($this->name);
			$this->email=strtolower($this->email);
			$sql="INSERT INTO names (name, email, password) VALUES ('$this->name', '$this->email', '$this->hash')";
			$result=$this->set($sql);
				$_SESSION['login']=$this->name;
				echo($result);
		}
		public function checkUserAction()
		{
			# code...
			$sql="SELECT password, name FROM names WHERE email='$this->email'";
			$arr=$this->getArray($sql);
			//echo($this->hash);
			//echo(strlen($this->hash));
			if ($arr==true) {
				$this->hash=$arr[0]['password'];
				if (password_verify($this->password, $this->hash)) {
    				// Success!
    				$_SESSION['login']=$arr[0]['name'];
					$data=array('1', $_SESSION['login']);
					echo(json_encode($data));
					//setcookie("val", $this->hash, time()+3600*24*360); 
				}
				else{
					$data=array('0', $this->email);
					echo(json_encode($data));
				}
			}
			else{
				$data=array('0', $this->email);
				echo(json_encode($data));
			}
			exit();
			//print_r($arr);
			
		}
		public function checkNameRegAction()
		{
			# name uniq
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
			# email uniq
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
		public function sessionCheckAction()
		{
			# code...
			if (isset($_SESSION['login'])) {
				$data=array('1', $_SESSION['login']);
				echo(json_encode($data));
			}
			else{
				$data=array('0', '');
				echo(json_encode($data));

			}
		}
		public function sessionCloseAction()
		{
			# code...
			unset($_SESSION['login']);
		}
		public function addRationAction()
		{
			# code...
			$rest_json = file_get_contents("php://input");
			$rest_vars = json_decode($rest_json, true);
			for ($i=0; $i < count($rest_vars); $i++) { 
				# code...
				$rest_vars[0]['product']=strtolower($rest_vars[0]['product']);
				$rest_vars[0]['product']=trim($rest_vars[0]['product'], "\x00..\x1F");
				$sql="INSERT INTO ration (user_id, product_id, weight) VALUES ((SELECT user_id FROM names WHERE name='".$_SESSION['login']."'), (SELECT product_id FROM products WHERE label='".$rest_vars[$i]['product']."'), '".$rest_vars[$i]['weight']."')";
				$result=$this->set($sql);
			}
			//print_r($rest_vars);


		}

	}
?>