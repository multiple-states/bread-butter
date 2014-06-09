<?php

  // A function to check an IP address and then set the site root variable to the relevant url
  
  // source: http://stackoverflow.com/a/7614272/1202344
  
  $host = gethostname();
  $ip = gethostbyname($host);
  
  // Test for the first contributers ip address
  if ($ip == '192.168.1.38') 
  {
    // Then they can set their site root variable
    $site_url = "http://localhost/00-php-starter-template/app/";
    
  } 
  
  // Test for the second contributers ip address
  elseif ($ip == '192.168.0.4') 
  {
    // Then they can set their site root variable
    $site_url = "http://localhost:8888/php-starter-template/app/";
  
  } 
  
  // Then for all else we can set the staging url as the site root variable
  else 
  {
    $site_url = "http://your-staging-url.com";
  }

?>