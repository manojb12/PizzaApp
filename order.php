<?php 
	// $_POST
	print_r($_POST);
	file_put_contents('order.json', $_POST['data']);

?>
