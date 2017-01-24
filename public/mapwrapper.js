var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    // center: {lat: 56.838555, lng: -2.544076}, 
    center: coords, 
    zoom: zoom
  });
};


MapWrapper.prototype = {
  addMarker: function(coords, content) {
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      draggable: true
    });
    marker.addListener('click', function() {
      infoWindow.open(this.googleMap, marker);
    });
    
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
        console.log(event);
        console.log(event.latLng.lat());
        this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
    }.bind(this));
  }

};

