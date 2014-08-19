<!--

Use this page to create every element that will be on your site in modules.

This helps testing for conflicts and allows for a quicker build.

-->

<?php 
  // Set the name of the current page before including the header
  $page_title = 'Home';
  // Include the header
  include('header.php') 
?>

  <!-- Pattern's included to save space -->
  <div class="l-strip">
    <div class="l-holder">
      <div class="l-inner">
        <?php include('includes/pattern.php') ?>
			</div>
		</div>
	</div>

  <div class="modules">
    <!-- Modules should be included with their variable defined as documented in the modules section of the wiki -->
    
    <?php 
      $postTitle = 'Post Title';
      $postImg = $site_url . 'images/dummy.jpg';
      $postContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
      $postLink = $site_url;
      include('modules/post-preview.php') 
    ?>

  </div> <!-- END modules -->

<?php include('footer.php') ?>