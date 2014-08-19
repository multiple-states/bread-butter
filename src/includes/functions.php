<?php

  // A function to check an IP address and then set the site root variable to the relevant url
  // To get your server IP create a test.php page and run: $host = gethostname(); $ip = gethostbyname($host); echo  $ip;

  // source: http://stackoverflow.com/a/7614272/1202344
  
  $host = gethostname();
  $ip = gethostbyname($host);
  
  // Test for the first contributers possible ip address ( KB )
  if ( $ip == '192.168.1.32' || $ip == '192.168.20.179' || $ip == '192.168.1.38' ) 
  {
    // Then they can set their site root variable
    $site_url = "http://localhost/php-starter-template/app/";
    
  } 
  
  // Test for the second contributers possible ip addresses ( WM )
  elseif ( $ip == '192.168.0.2' || $ip == '192.168.0.3' || $ip == '192.168.0.4' || $ip == '192.168.0.6' || $ip == '192.168.0.7' ) 
  {
    // Then they can set their site root variable
    $site_url = "http://localhost/bread-butter/app/";
  
  } 
  
  // Then for all else we can set the staging url as the site root variable
  else 
  {
    $site_url = "http://your-staging-url.com";
  }

?>