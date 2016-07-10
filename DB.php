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
		public function disconnect()
		{
			$this->dbh=null;
		}

	}
 
 ?>