<?php 
ini_set('display_errors', 'On');
error_reporting(E_ALL);


$host = gethostname();
$ip = gethostbyname($host);

echo '<p>your IP is: '. $ip . '</p>';


$servername = $_SERVER['SERVER_NAME'];
$documentroot = $_SERVER['DOCUMENT_ROOT'];

echo '<p>your server name is: '. $servername . '</p>';

echo '<p>your document root is: '. $documentroot . '</p>';

?>