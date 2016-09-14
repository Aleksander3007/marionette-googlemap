import Marionette from 'backbone.marionette';
import template from 'templates/item';

export default Marionette.ItemView.extend({
  template: template,
  
  ui: {
	map: '#map',
	placeText: '#placeText',
  },
  
  onRender: function(){
	var mapCanvas = this.ui.map[0]; 
	var placeTextElem = this.ui.placeText[0];
	
	var mapOptions = {
		zoom: 8,
		center:  {lat: 50, lng: 9},
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	map.addListener('click', function(event) {
		var placeLoc = new google.maps.LatLng(
			event.latLng.lat(), 
			event.latLng.lng()
		);
		var marker = createMarker(placeLoc);

		/* Определяем место по координатам и записываем инфо о месте. */
		var geocoder = new google.maps.Geocoder;
		geocoder.geocode(
			{location: placeLoc},
			processResults
		);
		function processResults(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					placeTextElem.textContent = 'Place: ' + results[1].formatted_address + '; ';
					return;
				}
			}
		}
	});
	
	/* Создание маркера на карте. */
	function createMarker(placeLoc) {
		var marker = new google.maps.Marker({
		  map: map,
		  position: placeLoc
		});
		return marker;
	}; 
  }
});
