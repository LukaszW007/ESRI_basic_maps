var mapTypeSelectorValue = document.getElementsByClassName("mapTypeSelector")[0];
var defaultMapTypeSelectorValue = mapTypeSelectorValue.value;

function drawSelectedMap(selectedMap) {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Basemap",
        "esri/layers/VectorTileLayer"
    ], function (Map, MapView, Basemap, VectorTileLayer) {

        var midCentury = new Basemap({
            baseLayers: [
                new VectorTileLayer({
                    portalItem: {
                        id: "7675d44bb1e4428aa2c30a9b68f97822"
                    }
                })
            ]
        });
        var antique = new Basemap({
            baseLayers: [
                new VectorTileLayer({
                    portalItem: {
                        id: "effe3475f05a4d608e66fd6eeb2113c0"
                    }
                })
            ]
        });

        var selectedMapValue=selectedMap;

        if (selectedMap === 'mid-century') {
            selectedMapValue=midCentury
        }
        if (selectedMap === 'antique') {
            selectedMapValue=antique
        }

        var map = new Map({
            basemap: selectedMapValue
        });

        console.log('current basemap: ' + JSON.stringify(map.basemap));

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [10.7522, 59.9139], // longitude, latitude
            zoom: 13
        });
    });
}

drawSelectedMap(defaultMapTypeSelectorValue);

mapTypeSelectorValue.addEventListener('change', function () {
    console.log('You selected: ', this.value);
    drawSelectedMap(this.value);
});
