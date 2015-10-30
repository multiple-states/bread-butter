<?php

  // A function to check the servername and then set the site root variable to the relevant url
  
  $servername = $_SERVER['SERVER_NAME'];
  
  if ( $servername == "your-production-url.com" ) {

    // Production site url variable
    $site_url = "http://your-production-url.com";
    
  } elseif ( $servername == "your-staging-url.com" ) {

    // Staging site url variable
    $site_url = "http://your-staging-url.com";
  
  } else {

    // Local site url variable
    $site_url = "http://localhost/bread-butter/app";

  }

?>