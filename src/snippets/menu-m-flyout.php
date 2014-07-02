<!-- The absolute positioned open button -->
<div class="m-menu-open"><a href="#">Menu</a></div>


<!-- The menu that is hidden behind the page-holder div-->
<div class="m-nav-holder">
  
  <!-- The close button -->
  <div class="m-menu-close">
    <a>X</a>
  </div>
  
  <!-- The menu -->
  <div class="m-first-nav">
    <?php include ('includes/menu.php'); ?>
  </div>
      
</div><!-- end m-nav-holder -->

<script>
  $(".m-menu-open a, .m-menu-close a").click(function(){
    $(".page-holder").toggleClass("open", 500, "easeInOutQuart");

  });

  $( ".m-first-nav a" ).click( function(){
    $(".page-holder").removeClass("open", 500, "easeInOutQuart");
  });
  
  $(window).resize(function(){
    $(".page-holder").removeClass("open", 500, "easeInOutQuart");
  });
</script>