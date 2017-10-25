function initMap() {
    var options = {
        zoom: 14,
        center: {lat: 1.286044, lng: 103.782403}
    };

    // create map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // add marker
    var marker = new google.maps.Marker({
      position: {lat: 1.286044, lng: 103.782403},
      map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h2>Headquarters</h2><p>Science Park 2 30 Science Park Road Singapore 117512<br>Tel: (+65) 6777 8999<br>Email: info@syzygyy.com</p><h2>Operation Hours</h2><p>Mon-Fri: 10am to 6pm | Sat-Sun & Public Holidays: Closed</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    })
}

$("a[href='#bottom']").click(function() {
    $("html, body").animate({ scrollTop: 1000}, "slow");
    return false;
});