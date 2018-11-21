var map = L.map('map', {
  //crs: L.CRS.Simple,
  crs: L.CRS.EPSG3857,
});

function attachFloorplan(geojson) {
  console.log(JSON.parse(geojson));
  var geo = geojson.returnObj.region.children["campus"].children["site"].children["floor"].layer_data[0].feature_groups["ff85344c0f47a200b7fe85ace1050e03"];


  var geojson_layer = L.geoJSON(geo);

  geojson_layer.addTo(map);
  map.fitBounds(geojson_layer.getBounds());
}


var openFile = function (event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    //alert(text.length);
    attachFloorplan(text);
  };
  reader.readAsText(input.files[0]);
};
