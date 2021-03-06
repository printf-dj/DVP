// Script for GMap
// Initialize and add the map
function initMap() {
  // The location of DVP
  const dvp = { lat: 30.45444, lng: 79.272418 };

  //Fix Font issue created by GMAP
  var head = document.getElementsByTagName("head")[0];
  // Save the original method
  var insertBefore = head.insertBefore;
  // Replace it!
  head.insertBefore = function (newElement, referenceElement) {
    if (
      newElement.href &&
      newElement.href.indexOf(
        "https://fonts.googleapis.com/css?family=Roboto"
      ) === 0
    ) {
      return;
    }
    insertBefore.call(head, newElement, referenceElement);
  };
  //Fix ends above

  // The map, centered at DVP
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: dvp,
    mapTypeId: 'hybrid',
  });
  // The marker, positioned at DVP
  const marker = new google.maps.Marker({
    position: dvp,
    map:map,
    animation: google.maps.Animation.BOUNCE,
    label:"DVP",
  });
}

//Script for Loader
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.querySelector( 
        ".loader").style.visibility = "visible"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        ".loader").style.display = "none"; 
        document.querySelector( 
          "#loader").style.visibility = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
}; 
