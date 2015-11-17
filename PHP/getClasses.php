<?php

	$con = mysqli_connect("localhost", "root", "", "401");
	if (mysqli_connect_errno())
			die("<br>Could not connect:".mysqli_error());
	$_GET['name'];
	$query = "Select classes.ID, UserName, Picture, CoverPhoto, ThemeSong, TeacherID, Name, EnrolledStudents, Description 
			from teacher inner join classes on teacher.ID = classes.TeacherID where teacher.UserName = '".$_GET['name']."'";
	$r = sendQuery($query, $con);
	$ret = array();
	if(!empty($r)){
		for($i = 0; $i <$r->num_rows; $i++){
			$row = $r->fetch_array(MYSQLI_ASSOC);
			$row['files'] = array();
			$query2 = "Select * from files where classID = '".$row['ID']."'";
			$r2 = sendQuery($query2, $con);
			for($j = 0; $j < $r2->num_rows;$j++){
				$file = $r2->fetch_array(MYSQLI_ASSOC);
				array_push($row['files'], $file);
			}
			
			array_push($ret, $row);
		}
		echo(json_encode($ret));
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