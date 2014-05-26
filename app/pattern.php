<?php include('header.php')?>

  <div class="l-strip">
    <div class="l-holder">
      <div class="l-inner">

        <h1 class="page-title">HTML Elements</h1>
        <?php
        $files = array();
        $handle=opendir('patterns');
        while (false !== ($file = readdir($handle))):
            if(stristr($file,'.html')):
                $files[] = $file;
            endif;
        endwhile;
        sort($files);
        foreach ($files as $file):
            /* Bring in the file within the patterns folder and wrap it in some divs for styling*/
            echo '<div class="pattern">';
            echo '<div class="display">';
            include('patterns/'.$file);
            echo '</div>';
            /* Then state the source file below the element*/
            echo '<div class="source">';
            echo '<p>Source: <a href="patterns/'.$file.'">'.$file.'</a></p>';
            echo '</div>';
            echo '</div>';
        endforeach;
        ?>
			</div>
		</div>
	</div>
  
  <?php
  $files = array();
  $handle=opendir('modules');
  while (false !== ($file = readdir($handle))):
      if(stristr($file,'.html')):
          $files[] = $file;
      endif;
  endwhile;
  sort($files);
  foreach ($files as $file):
      /* Bring in the file within the modules folder and wrap it in some divs for styling*/
      include('modules/'.$file);
      /* Then state the source file below the module*/
      echo '<div class="l-strip">';
      echo '<div class="l-holder">';
      echo '<div class="pattern-module">';
      echo '<div class="source">';
      echo '<p>Source: <a href="modules/'.$file.'">'.$file.'</a></p>';
      echo '</div>';
      echo '</div>';
      echo '</div>';
      echo '</div>';
  endforeach;
  ?>
  
<?php include('footer.php')?>