<?php

  // A function to check an IP address and then set the site root variable to the relevant url
  // To get your server IP create a test.php page and run: $host = gethostname(); $ip = gethostbyname($host); echo  $ip;

  // source: http://stackoverflow.com/a/7614272/1202344
  
  $host = gethostname();
  $ip = gethostbyname($host);
  
  // Test for the first contributers possible ip address
  if ( $ip == '111.111.1.1' ) 
  {
    // Then they can set their site url variable
    $site_url = "http://localhost/bread-butter/app";

    define('SITE_ROOT', '/Users/kevin/Sites/bread-butter/app');
    
  } 
  
  // Test for the second contributers possible ip addresses
  elseif ( $ip == '222.222.2.2' ) 
  {
    // Then they can set their site url variable
    $site_url = "http://localhost/bread-butter/app";

    define('SITE_ROOT', '/Users/williammclean/WORK/local-sites/bread-butter/app');
  
  } 
  
  // Then for all else we can set the staging url as the site url variable
  else 
  {
    $site_url = "http://your-staging-url.com";
  }

?>