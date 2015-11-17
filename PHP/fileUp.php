<?php



	$con = mysqli_connect("localhost", "root", "", "401");
	if (mysqli_connect_errno())
			die("<br>Could not connect:".mysqli_error());

	define ('SITE_ROOT', realpath(dirname(__FILE__)));
	$target_dir = "\Content\Uploads\\";
	$target_file = $target_dir . basename($_FILES['file']["name"]);
	echo($target_file);
	print_r($_POST);

	if(move_uploaded_file($_FILES['file']["tmp_name"], SITE_ROOT.$target_file)){
		echo("success");
	}
	else{
		echo("y dis no wurk");
	}


	//$query = "Select classes.ID, UserName, Picture, CoverPhoto, ThemeSong, TeacherID, Name, EnrolledStudents, Description 
	//		from teacher inner join classes on teacher.ID = classes.TeacherID where teacher.UserName = '".$_GET['name']."'";
	//$r = sendQuery($query, $con);



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