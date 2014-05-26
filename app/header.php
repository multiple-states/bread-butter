 <!DOCTYPE html> 

<html>

  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Title</title>
  
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <?php include('functions.php')?>
  
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="shortcut icon" sizes="196x196" href="<?php echo $site_url ?>/your-icon.png">
  <link rel="apple-touch-icon" sizes="196x196" href="<?php echo $site_url ?>/your-icon.png">
  
  <link rel="stylesheet" href="<?php echo $site_url ?>/css/style.min.css" >

  </head>
  <body>
    
    <!--[if lt IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    
    <div class="l-page-holder page-holder">
    
    <?php include('snippets/menu-open-btn.php')?>
    
    <div class="l-strip">
      <header>
        <div class="l-inner">
          <div class="the-head">
            <a class="the-head-link" href="<?php echo $site_url ?>"><?php include ('images/logo.svg') ?></a>
            <h1 class="the-head-title">Site Title</h1>
          </div>
        </div>
      </header>
    </div>
    
    <?php include('snippets/float-menu.php')?>