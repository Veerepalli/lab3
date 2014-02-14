var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

  
   
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(41.850033, -87.6500523)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
       
  var control = document.getElementById('control');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP.FULL].push(control);
}

function findWeatherandCalcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  
            if (start == '' || end == '') {
                // cannot calculate route
                $("#temp").hide();
                return;
            }
            else {
    var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
    }
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
          $("#temp").show();
    }
  });
    
  document.getElementById('temp').innerHTML = '<hr/><p>Weathers at source and destinations</p><br/><center><table><tr><td><b>Source</b></td><td><b>Destination</b></td></tr><tr><td><iframe src="http://api.openweathermap.org/data/2.5/weather?q='+start+'&mode=html" name="targetframe" allowTransparency="true" scrolling="no" frameborder="0" ></iframe></td><td><iframe src="http://api.openweathermap.org/data/2.5/weather?q='+end+'&mode=html" name="targetframe" allowTransparency="true" scrolling="no" frameborder="0" ></iframe></td></tr></table></center>';
}
