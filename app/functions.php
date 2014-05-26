<?php
// check IP to set site root 
// source: http://stackoverflow.com/a/7614272/1202344
$host = gethostname();
$ip = gethostbyname($host);
if ($ip == '192.168.1.38') 
{
  $site_url = "http://localhost/00-php-starter-template/app/";
} elseif ($ip == 'ADD_YOUR_IP_HERE') 
{
  $site_url = "SET_YOUR_LOCAL_PATH_HERE";
}
?>