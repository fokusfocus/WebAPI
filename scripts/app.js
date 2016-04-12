var map;
var marker;
var panorama;
var geocoder;

$("#go-to-map-btn").click(function () {
    console.log("Go to map");

    $("#auth-view-mode").hide();
    $("#map-view-mode").show();

    //location of OSISoft HQ
    var osisoftloc = { lat: 37.730347, lng: -122.160455 };

    //create new Maps object
    map = new google.maps.Map(document.getElementById('map'), {
        center: osisoftloc,
        zoom: 16,
        streetViewControl: false
    });

    //create market object
    marker = new google.maps.Marker({
        position: osisoftloc,
        map: map
    });

    panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
        position: osisoftloc,
        pov: {
            heading: 0,
            pitch: 0,
            zoom: 1
        }
    });

    geocoder = new google.maps.Geocoder();

});

$("#back-btn").click(function () {
    console.log("Go back");

    $("#map-view-mode").hide();
    $("#auth-view-mode").show();
});

$("search-address-btn").click(function () {
    console.log("I'm pressing the search button");
});





//$("search-address-btn").click(function () {
//    var address = document.getElementById("address").value;
//    console.log(address);
//    console.log("Is this thing on?");

//    geocoder.geocode({ 'address': address }, function (results, status) {
//        if (status == google.maps.GeocoderStatus.OK) {
//            map.setCenter(results[0].geometry.location);
//            marker.setPosition(results[0].geometry.location);
//            panorama.setPosition(results[0].geometry.location);
//            panorama.setPov({
//                heading: 0,
//                pitch: 0,
//                zoom: 1

//            });
//        } else {
//            alert("Geocode was not successful for the following reasons: " + status);
//        }
//    });
//});
