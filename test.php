<?php 
ini_set('display_errors', 'On');
error_reporting(E_ALL);


$host = gethostname();
$ip = gethostbyname($host);

$servername = $_SERVER['SERVER_NAME'];
$documentroot = $_SERVER['DOCUMENT_ROOT'];

echo '<p>your IP for WP config is'. $ip . '</p>';

// Define the seperate environments based on the ip
if  ($ip == '192.168.0.4') { 

  define('CONSTANT', 'user1development'); 

} elseif  ($ip == '192.168.1.38') { 

  define('CONSTANT', 'user2development'); 

} else {

  // For all else the environment will be production 
  define('CONSTANT', 'production');

}

// Set the values based on the environment
if ( CONSTANT == 'user1development' ) {

echo "local user 1";

} elseif ( CONSTANT == 'user2development' ) {

echo "local user 2";

} else {

echo "production";

}

echo '<p>your server name for WP config is '. $servername . '</p>';

echo '<p>your document root for WP config is '. $documentroot . '</p>';

?>