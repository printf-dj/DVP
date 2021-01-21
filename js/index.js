        // Initialize and add the map
        function initMap() {
          // The location of DVP
          const dvp = { lat: 30.45520838256879, lng: 79.27242999999999 };
          // The map, centered at DVP
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: dvp,
          });
          // The marker, positioned at DVP
          const marker = new google.maps.Marker({
            position: dvp,
            map: map,
          });
        }