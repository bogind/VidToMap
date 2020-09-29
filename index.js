let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let map = L.map('map', {
    layers: OpenStreetMap_Mapnik,
    center: [ 31.895827, 34.811196],
    zoom: 12
    });
let required = 2;
let recieved = 0;
var boxesGJ;
var countriesGJ;
$.getJSON('boxes.geojson',function(response){
    boxesGJ = response;
    boxes = L.geoJSON(response,{
        style : {
            "opacity": 0,
            "fillOpacity": 0
        }
    }).addTo(map)
    recieved += 1
})
$.getJSON('countries.geojson',function(response){
    countriesGJ = response;
    countries = L.geoJSON(response,{
        filter: function(feature){
            return false;
        }
    }).addTo(map)
    recieved += 1
})  
let passed = []
var vid = document.getElementById("myVideo");

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
  // Display the current position of the video in a p element with id="demo"
  if(Math.round(vid.currentTime) == 34 && passed.indexOf("Italy") < 0){
      passed.push("Italy")
      map.removeLayer(countries)
      countries = L.geoJSON(countriesGJ,{
        filter: function(feature){
            if(feature.properties.NAME == "Italy"){
                    return true;
                }else{
                 return false;
             }
            
            },
            onEachFeature: function(feature, layer) {
              // does this feature have a property named popupContent?
              if (feature.properties && feature.properties.NAME) {
                  layer.bindPopup(feature.properties.NAME);
              }
          }
        }).addTo(map)
        countries.eachLayer(function(layer){
            layer.openPopup()
            })
        map.flyToBounds(countries.getBounds())
      
  }else if(Math.round(vid.currentTime) == 38 && passed.indexOf("France") < 0){
    passed.push("France")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "France"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 43 && passed.indexOf("Japan") < 0){
    passed.push("Japan")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Japan"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 51 && passed.indexOf("Hawai") < 0){
    passed.push("Hawai")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Hawai"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 55 && passed.indexOf("UK") < 0){
    passed.push("UK")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "UK"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 90 && passed.indexOf("Kenya") < 0){
    passed.push("Kenya")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Kenya"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 95 && passed.indexOf("Greece") < 0){
    passed.push("Greece")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Greece"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 100 && passed.indexOf("China") < 0){
    passed.push("China")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "China"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 107 && passed.indexOf("Brazil") < 0){
    passed.push("Brazil")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Brazil"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(vid.currentTime) == 111 && passed.indexOf("Morocco") < 0){
    passed.push("Morocco")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Morocco"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(feature.properties.NAME);
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }
}
