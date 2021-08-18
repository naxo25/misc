<?php

// Define Cors

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	header('content-type: application/json; charset=utf-8');

	include_once 'connection.php';

	$objeto = new Connection();
	$conexion = $objeto -> open();

	if ($_SERVER['REQUEST_METHOD'] == 'GET')
	{
		if ($_GET['opcion'] == 'get') {
			$consulta = "SELECT * FROM tareas";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data=$resultado -> fetchAll(PDO::FETCH_ASSOC);
			print json_encode($data);
		} else {
			echo "error 404";
		}
	}

	if ($_SERVER['REQUEST_METHOD'] == 'POST') {

		$img   = (isset($_POST['img'])) ? $_POST['img'] : '';
		$tarea = (isset($_POST['tarea'])) ? $_POST['tarea'] : '';
		$fecha = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';
		$id = (isset($_POST['tarea_id'])) ? $_POST['tarea_id'] : '';
		switch($_POST['opcion']) {
			case 'insert':
				$consulta = "INSERT INTO tareas (tarea,fecha) VALUES('$tarea','$fecha') ";
				$resultado = $conexion -> prepare($consulta);
				$resultado -> execute();
				break;
			case 'update':
				$consulta = "UPDATE tareas SET tarea='$tarea', fecha='$fecha' WHERE tarea_id='$id' ";
				$resultado = $conexion -> prepare($consulta);
				$resultado -> execute();
				break;
			case 'delete':
				$consulta = "DELETE FROM tareas WHERE tarea_id='$id' ";
				$resultado = $conexion -> prepare($consulta);
				$resultado -> execute();
				break;
		}
	}

	$conexion = NULL;
