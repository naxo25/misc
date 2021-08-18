<?php

// Define Cors

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	header('content-type: application/json; charset=utf-8');

	if ($_GET['opcion'] == 'get'){

		$data[] = array(
			"gender" => "female",
			"name" => "Miss first Brooke",
			"email" => "zhang@example.com",
			"picture" => "https://randomuser.me/api/portraits/women/72.jpg"
		);

		$data[] = array("gender" => "male",
			"name" => "Mr first Omri",
			"email" => "Baku@Tbilisi",
			"email" => "omri.bouwmeester@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/25.jpg"
		);

		$data[] = array(
			"gender" => "female",
			"name" => "Ms first Madison",
			"email" => ".lewis@example.com",
			"picture" => "https://randomuser.me/api/portraits/women/61.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first Alan",
			"email" => "@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/17.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first Bernhard",
			"email" => "bernhard.pladsen@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/93.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first Allen",
			"email" => "allen.graham@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/70.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first Thomas",
			"email" => "thomas.mitchell@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/1.jpg"
		);

		$data[] = array(
			"gender" => "female",
			"name" => "Mrs first آرمیتا",
			"email" => "example.com",
			"picture" => "https://randomuser.me/api/portraits/women/86.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Monsieur first Lorenz",
			"email" => "lorenz.roger@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/40.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first Fernando",
			"email" => "fernando.george@example.com",
			"picture" => "https://randomuser.me/api/portraits/men/11.jpg"
		);

		$data[] = array(
			"gender" => "male",
			"name" => "Mr first سام",
			"email" => "adsasdasd@gmail.com",
			"picture" => "https://randomuser.me/api/portraits/men/75.jpg"
		);

		print json_encode($data);
	}