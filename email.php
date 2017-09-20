<?php

$to = "slava_eclipse@mail.ru";

$name    = $_POST["name"];
$email   = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: ".$name." <".$email."> \r\n";


if($name != "") {
	
	if($email != "") {
		if($subject != "") {

			if(filter_var($email, FILTER_VALIDATE_EMAIL)) 
			{
				if (mail($to, $subject, $message, $headers)) 
				{
					echo 1 ; //Ваш заказ успешно отправлен!
				} 
				else 
				{
					echo 2; //Ошибка! заказ не отправлен...
				}

			} 
			else 
			{
				echo 3; //Некорректный e-mail адрес
			}

		} else {
			echo 5; 
		}
	} else {
		echo 6; 
	}
} else {
	echo 4; 
}









