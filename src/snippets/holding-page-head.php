<div class="l-strip">
  <header>
    <div class="l-inner">
      <div class="center-head">
        <div class="center-head-logo"><?php include ('images/logo.svg') ?></a>
        <h1 class="center-head-title">Heading</h1>
        <p class="center-head-text">Address line 1<br>Address line 2<br>Address line 3</div>
      </div>
    </div>
  </header>
</div>

<!-- Move the code within the script tags to your custom.js file -->
<script>
  $(window).on( 'resize', function () {

  var viewportHeight = $(window).height();
  var headHeight = $(".center-head").height();
  var customPadding = (viewportHeight-headHeight)/2;

  $(".center-head").css({"padding-top": customPadding });

  }).resize();
</script>

