var initialize = function() {
  var shardInfo = "The Shard is home to some of the best offices, restaurants and hotel rooms in London - along with breathtaking views.";
  var center = {lat: 51.507983, lng: -0.128097};
  var shard = {lat: 51.504573, lng:-0.086421};
  var mapDiv = document.querySelector('#main-map')
  var mainMap = new MapWrapper(mapDiv, center, 10);
  var button = document.querySelector('button');
  var button2 = document.querySelectorAll('button')[1];
  mainMap.addMarker(center);
  mainMap.addMarker(shard, shardInfo);
  mainMap.addClickEvent();

  button.onclick = function() {
    var mapDiv = document.querySelector('#main-map')
    var chicago = {lat:41.881338, lng:-87.626112};
    mainMap.googleMap.setCenter(chicago);
  };

  button2.onclick = function() {

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // var infoWindow = new google.maps.InfoWindow({
        // position: pos,
        // content: 'Location Found';
      // });
      mainMap.googleMap.setCenter(pos);
    
    var currentLocationInfo = new MapWrapper (mapDiv, pos, 10);
    currentLocationInfo.addMarker(pos, 'Location Found!');
    })
  }


}


// var handleClick = function() {
//   var mapDiv = document.querySelector('#main-map')
//   var chicago = {lat:41.881338, lng:-87.626112};
//   var goToChicago = new MapWrapper(mapDiv, chicago, 10);
// }


window.onload = initialize;