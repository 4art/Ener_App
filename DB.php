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
			$this->conn_data=array(
				"host" => "localhost",
				"dbname" => "Energize",
				"user" => "root",
				"password" => ""
			);
		}
		public function connect()
		{
			$dns="mysql:host={$this->conn_data['host']};dbname={$this->conn_data['dbname']}";
			try {
				$this->dbh=new PDO($dns, $this->conn_data['user'], $this->conn_data['password']);
				
			} catch (PDOException $e) {
				print "Error!: " . $e->getMessage() . "<br/>";
    			die();
			}
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
		public function disconnect()
		{
			$this->dbh=null;
		}

	}
	$obj=new DB;
	$obj->connect();
	$arr=$obj->getArray("SELECT * FROM products ");
	print_r($arr);
	$obj->disconnect();
 ?>