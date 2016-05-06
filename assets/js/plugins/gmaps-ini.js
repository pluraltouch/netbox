// https://developers.google.com/maps/documentation/javascript/examples/
function initMap() {

  var image = new google.maps.MarkerImage(
  	'assets/img/marker.png',
  	new google.maps.Size(48,54),
  	new google.maps.Point(0,0),
  	new google.maps.Point(24,54)
  	);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    scrollwheel: false,
    center: { lat: 47.473, lng: 19.015 }  
  });

  var infowindow = new google.maps.InfoWindow;
  infowindow.setContent('<b>Budapest</b>');

  var marker = new google.maps.Marker({
  	map: map,
  	clickable: false,
  	//icon: image,
  	position: { lat: 47.473, lng: 19.015 }
  });
}
