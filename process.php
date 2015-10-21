<?php

	if ($_POST['action'] === "contactForm"){
		$email = $_POST['email'];
		$name = $_POST['name'];
		$info = $_POST['message'];
		$to = 'raless@umich.edu';
		$subject = "Tutoring: Message from " . $name;
		$headers = "From: Raless Tutoring";
		$message = $info;

		$response = mail($to, $subject, $message, $headers);
		echo json_encode($response);
	}
?>