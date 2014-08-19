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


<!-- Move the code within the script tags to your custom.js file -->
<script>

  // Open and close the flyout menu
  $(".m-menu-open a, .m-menu-close a").click(function(){

    $(".page-holder").toggleClass("open", 500, "easeInOutQuart");

  });

  // When a link is clicked close the flyout menu before navigating to the new page
  $('.m-primary-menu a').click(function(event) {

      event.preventDefault();
      var href = this.href;

      $(".page-holder").removeClass("open", 500,  "easeInOutQuart",
      function() {
          window.location = href;
      });

  });
  
</script>