let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let map = L.map('map', {
    layers: OpenStreetMap_Mapnik,
    center: [ 31.5832150, 34.4311523],
    zoom: 7
    });
let required = 2;
let recieved = 0;
var boxesGJ;
var countriesGJ, countries;
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

function MoveMap(currentTime) {
  // Display the current position of the video in a p element with id="demo"
  if(Math.round(currentTime) == 36 && passed.indexOf("Italy") < 0){
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
                  layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
              }
          }
        }).addTo(map)
        countries.eachLayer(function(layer){
            layer.openPopup()
            })
        map.flyToBounds(countries.getBounds())
      
  }else if(Math.round(currentTime) == 40 && passed.indexOf("France") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 44 && passed.indexOf("Japan") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 51 && passed.indexOf("Hawai") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 55 && passed.indexOf("UK") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 87 && passed.indexOf("Ethiopia") < 0){
    passed.push("Ethiopia")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Ethiopia"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 91 && passed.indexOf("Greece") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 96 && passed.indexOf("Russia") < 0){
    passed.push("Russia")
    map.removeLayer(countries)
    countries = L.geoJSON(countriesGJ,{
      filter: function(feature){
          if(feature.properties.NAME == "Russia"){
                  return true;
              }else{
               return false;
           }
          
          },
          onEachFeature: function(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 102 && passed.indexOf("Brazil") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }else if(Math.round(currentTime) == 106 && passed.indexOf("Morocco") < 0){
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
                layer.bindPopup("<h2>"+feature.properties.display_name+"</h2>"+"<img width='150px' src='"+feature.properties.flag+"'/>");;
            }
        }
      }).addTo(map)
      countries.eachLayer(function(layer){
        layer.openPopup()
        })
      map.flyToBounds(countries.getBounds())

  }
}



var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideo', {
    height: '390',
    width: '640',
    videoId: 'X-HJH0wq6tg',
    events: {
        'onReady': onPlayerReady
    }
    });
    
}


function onPlayerReady(event) {
    event.target.playVideo();
    logTime()
}

function logTime(){
    if(player){
        if(player.getPlayerState() == 1){
            console.log(player.getCurrentTime())
            MoveMap(player.getCurrentTime())
        }
    }
    setTimeout(logTime, 500);
}
