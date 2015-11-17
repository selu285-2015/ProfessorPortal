<?php

	$con = mysqli_connect("localhost", "root", "", "401");
	if (mysqli_connect_errno())
			die("<br>Could not connect:".mysqli_error());

	$query = "Select * from teacher where Password = ".$_POST['password']." and UserName = '".$_POST['user']."'";
	$query= substr($query, 0, strlen($query)-1)."' #--";
	//$query = str_replace("/", "", $query);
	$query = preg_replace('{(<br(\s*/)?>|&nbsp;)+$}i', '', $query);
	//echo(($query));
	$r = sendQuery($query, $con);
	if(!empty($r)){
		$row = $r->fetch_array(MYSQLI_ASSOC);
		echo(json_encode($row));
	}
	$con->close();

	
function sendQuery($q, $con) {
		//echo "<br>Query: ".$q;
		$r = mysqli_query($con,$q);
		//if (!empty($r))
		//	  echo "<br>Successful Query";
		//else
		//	  echo "<br>Failure Query";
		return $r;
	}
?>