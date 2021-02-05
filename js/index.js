// Initialize and add the map
function initMap() {
  // The location of DVP
  const dvp = { lat: 30.454530, lng:79.272533 };

  //Fix Font issue created by GMAP
  var head = document.getElementsByTagName('head')[0];
  // Save the original method
  var insertBefore = head.insertBefore;
  // Replace it!
  head.insertBefore = function (newElement, referenceElement) {
    if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
      return;
    }
    insertBefore.call(head, newElement, referenceElement);
  };
  //Fix ends above

  // The map, centered at DVP
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: dvp,
  });
  // The marker, positioned at DVP
  const marker = new google.maps.Marker({
    position: dvp,
    map: map,
    animation:google.maps.Animation.BOUNCE
  });
  
}
