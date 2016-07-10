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
			/*$i=0;
			foreach($this->dbh->query($sql) as $row) {
				$result[$i]=$row;
				$i++;
    		}*/
    		//made as PDO
    		$result=$this->dbh->query($sql);
    		$row=$result->fetchAll(PDO::FETCH_ASSOC);	
        	$row=$this->convert($row);
        	return $row;
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
			$result=$this->dbh->exec($value);
		}
		public function setProducts($label, $protein, $fat, $carbo, $kcal)
		{
			$allowed=array(NULL, $label, $protein, $fat, $carbo, $kcal);
			$sql="INSERT INTO user SET ".pdoSet($allowed, $values);
			$smt=$this->dbh->prepare($sql);
			$smt->execute($values);
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