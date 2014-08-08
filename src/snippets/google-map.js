  var map;
  
  function initialize() {
    // You need to set your latitude and  longitude here
    var myLatlng = new google.maps.LatLng(51.497951, -0.144491);
    
    var isDraggable = $(document).width() > 480 ? true : false; // If document is wider than 480px, isDraggable = true, else isDraggable = false SRC - https://coderwall.com/p/pgm8xa

    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      draggable: isDraggable,
      scrollwheel: false
    };

    // Insert the map into the div with the id contact-map
    map = new google.maps.Map(document.getElementById('contact-map'),
        mapOptions);
    
    // To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        // Set the title
        title:"Give it a title",
        // Set the custom icon
        // icon: "path to your custom icon"
    });

    // Some default styles for a cleaner map. Adjust as nessessary.
    // A good tool for this can be found here - http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html?utm_medium=twitter
    var styles = [
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#ffffff" }
          ]
        },{
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#333333" }
          ]
        },{
          "elementType": "labels.text.stroke",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#666666" }
          ]
        },{
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            { "visibility": "simplified" }
          ]
        },{
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#999999" }
          ]
        }
      ];


      map.setOptions({styles: styles});
    
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);