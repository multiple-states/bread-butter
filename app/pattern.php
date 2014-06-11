<!--

Use this page to create every element that will be on your site in modules.

This helps testing for conflicts and allows for a quicker build.

-->

<?php include('header.php') ?>

  <!-- Pattern's included to save space -->
  <div class="l-strip">
    <div class="l-holder">
      <div class="l-inner">
        <?php include('includes/pattern.php') ?>
			</div>
		</div>
	</div>

  <!-- Modules should be included as seperate includes with their own strip and holder -->
  <?php include('modules/module.php') ?>

<?php include('footer.php') ?>