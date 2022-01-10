var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kecamatan_0 = new ol.format.GeoJSON();
var features_kecamatan_0 = format_kecamatan_0.readFeatures(json_kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_0.addFeatures(features_kecamatan_0);var lyr_kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_0, 
                style: style_kecamatan_0,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_0_0.png" />  11932.0000 - 48784.0000 <br />\
    <img src="styles/legend/kecamatan_0_1.png" />  48784.0000 - 85636.0000 <br />\
    <img src="styles/legend/kecamatan_0_2.png" />  85636.0000 - 122488.0000 <br />\
    <img src="styles/legend/kecamatan_0_3.png" />  122488.0000 - 159340.0000 <br />\
    <img src="styles/legend/kecamatan_0_4.png" />  159340.0000 - 196192.0000 <br />'
        });

lyr_kecamatan_0.setVisible(true);
var layersList = [baseLayer,lyr_kecamatan_0];
lyr_kecamatan_0.set('fieldAliases', {'id': 'id', 'kecamatan': 'kecamatan', 'jml.desa': 'jml.desa', 'jml.dusun': 'jml.dusun', 'L.Wilayah': 'L.Wilayah', });
lyr_kecamatan_0.set('fieldImages', {'id': 'TextEdit', 'kecamatan': 'TextEdit', 'jml.desa': 'TextEdit', 'jml.dusun': 'TextEdit', 'L.Wilayah': 'TextEdit', });
lyr_kecamatan_0.set('fieldLabels', {'id': 'inline label', 'kecamatan': 'inline label', 'jml.desa': 'inline label', 'jml.dusun': 'no label', 'L.Wilayah': 'no label', });
lyr_kecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});