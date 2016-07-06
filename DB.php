<?php 
	/**
	* 
	*/
	class DB
	{
		private $conn_data=array();
		private $dbh;
		function __construct()
		{
			include 'data.php';
		}
		public function connect()
		{
			$dns="mysql:host={$this->conn_data['host']};dbname={$this->conn_data['dbname']}";
			$this->dbh=new PDO($dns, $this->conn_data['user'], $this->conn_data['password']);
		}
		public function getArray($sql)
		{	
			$i=0;
			foreach($this->dbh->query($sql) as $row) {
				$result[$i]=$row;
				$i++;
    		}
        	$result=$this->convert($result);
        	return $result;
		}
		public function convert($array)
		{
			array_walk_recursive($array, function(&$item, $key){
	        	if(!mb_detect_encoding($item, 'utf-8', true)){
	                $item = utf8_encode($item);
	        	}
		    });
		 
		    return $array;
		}
		public function set($value)
		{
			if ($this->dbh->query($value)===TRUE) {
				return true;
			}
			else{
				return false;
			}
		}
		public function disconnect()
		{
			$this->dbh=null;
		}

	}
	/*$obj=new DB;
	$obj->connect();
	$arr=$obj->getArray("SELECT * FROM products WHERE label LIKE '%".$_GET['term']."%'");
	//print_r($arr);
	echo(json_encode($arr));
	$obj->disconnect();*/
 
 ?>