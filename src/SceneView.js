require([
    "esri/Map",
    "esri/views/SceneView"
], function(Map, SceneView) {

    var map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation"  // show elevation
    });

    const view = new SceneView({
        container: "viewDiv2",
        map: map,
        camera: {
            position: {  // observation point
                x: 10.7522,
                y: 59.5139,
                z: 25000 // altitude in meters
            },
            tilt: 65  // perspective in degrees
        }
    });
});
