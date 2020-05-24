var mapTypeSelectorValue = document.getElementsByClassName("mapTypeSelector")[0];
var defaultMapTypeSelectorValue = mapTypeSelectorValue.value;

function drawSelectedMap(selectedMap) {
    require([
        "esri/Map",
        "esri/views/MapView"
    ], function (Map, MapView) {

        var map = new Map({
            basemap: selectedMap
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
