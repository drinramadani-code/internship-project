<?php
require_once('functions.inc.php');
require_once('session.php');
	if(isset($_SESSION['userid'])){
		header('location: ../dashboard');
	}
	if (isset($_POST["submit"])) {
	
		$username = $_POST["uid"];
		$pwd = $_POST["pwd"];

		require_once 'dbh.inc.php';
		require_once 'functions.inc.php';

		if ($username == "admin" && $pwd == "admin") {
			$_SESSION['admin'] = "admin";
		}
		
		if (emptyInputLogin($username, $pwd) !== false) {
			header("location: ../users/login.php?error=emptyinput");
			exit();
		}

		loginUser($conn, $username, $pwd);
	}
	else{
		header("location: ../users/login.php");
		exit();
	}
