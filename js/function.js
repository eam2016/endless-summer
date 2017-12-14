// JavaScript Document

jQuery(document).ready(function($){
	
	function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
	  center: new google.maps.LatLng(-37.8324, 174.8054),
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)
  }
  google.maps.event.addDomListener(window, 'load', initialize);
	
// Smooth scroll home nav
		$('.smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top
			 }, 1000, function(){
		
			   // when done, add hash to url
			   // (default click behaviour)
			   window.location.hash = hash;
			 });
		
		});

	
});