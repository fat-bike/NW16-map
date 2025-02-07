var wms_layers = [];

var format_SnowmobileTrail_0 = new ol.format.GeoJSON();
var features_SnowmobileTrail_0 = format_SnowmobileTrail_0.readFeatures(json_SnowmobileTrail_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SnowmobileTrail_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SnowmobileTrail_0.addFeatures(features_SnowmobileTrail_0);
var lyr_SnowmobileTrail_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SnowmobileTrail_0, 
                style: style_SnowmobileTrail_0,
                popuplayertitle: 'Snowmobile Trail',
                interactive: true,
                title: '<img src="styles/legend/SnowmobileTrail_0.png" /> Snowmobile Trail'
            });
var format_tourism_polygon_1 = new ol.format.GeoJSON();
var features_tourism_polygon_1 = format_tourism_polygon_1.readFeatures(json_tourism_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_polygon_1.addFeatures(features_tourism_polygon_1);
var lyr_tourism_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_polygon_1, 
                style: style_tourism_polygon_1,
                popuplayertitle: 'tourism_polygon',
                interactive: true,
    title: 'tourism_polygon<br />\
    <img src="styles/legend/tourism_polygon_1_0.png" /> <br />\
    <img src="styles/legend/tourism_polygon_1_1.png" /> campground<br />\
    <img src="styles/legend/tourism_polygon_1_2.png" /> camping<br />\
    <img src="styles/legend/tourism_polygon_1_3.png" /> dog park<br />\
    <img src="styles/legend/tourism_polygon_1_4.png" /> glamping<br />\
    <img src="styles/legend/tourism_polygon_1_5.png" /> golf course<br />\
    <img src="styles/legend/tourism_polygon_1_6.png" /> hardluck falls and canyon<br />\
    <img src="styles/legend/tourism_polygon_1_7.png" /> outdoor rink<br />\
    <img src="styles/legend/tourism_polygon_1_8.png" /> ski hill<br />\
    <img src="styles/legend/tourism_polygon_1_9.png" /> waterpark<br />' });
var format_TourismSite_2 = new ol.format.GeoJSON();
var features_TourismSite_2 = format_TourismSite_2.readFeatures(json_TourismSite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TourismSite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TourismSite_2.addFeatures(features_TourismSite_2);
var lyr_TourismSite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TourismSite_2, 
                style: style_TourismSite_2,
                popuplayertitle: 'Tourism Site',
                interactive: true,
    title: 'Tourism Site<br />\
    <img src="styles/legend/TourismSite_2_0.png" /> <br />\
    <img src="styles/legend/TourismSite_2_1.png" /> History<br />\
    <img src="styles/legend/TourismSite_2_2.png" /> meteor site<br />\
    <img src="styles/legend/TourismSite_2_3.png" /> mini golf<br />\
    <img src="styles/legend/TourismSite_2_4.png" /> Museum<br />\
    <img src="styles/legend/TourismSite_2_5.png" /> outdoor rink<br />\
    <img src="styles/legend/TourismSite_2_6.png" /> playground<br />\
    <img src="styles/legend/TourismSite_2_7.png" /> waterpark<br />' });

lyr_SnowmobileTrail_0.setVisible(true);lyr_tourism_polygon_1.setVisible(true);lyr_TourismSite_2.setVisible(true);
var layersList = [lyr_SnowmobileTrail_0,lyr_tourism_polygon_1,lyr_TourismSite_2];
lyr_SnowmobileTrail_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TrailName': 'TrailName', 'Trailname2': 'Trailname2', 'length': 'length', });
lyr_tourism_polygon_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Type': 'Type', });
lyr_TourismSite_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', });
lyr_SnowmobileTrail_0.set('fieldImages', {'OBJECTID': 'Range', 'TrailName': 'TextEdit', 'Trailname2': 'TextEdit', 'length': 'TextEdit', });
lyr_tourism_polygon_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Type': 'TextEdit', });
lyr_TourismSite_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'TextEdit', });
lyr_SnowmobileTrail_0.set('fieldLabels', {'OBJECTID': 'no label', 'TrailName': 'inline label - visible with data', 'Trailname2': 'no label', 'length': 'no label', });
lyr_tourism_polygon_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Type': 'inline label - visible with data', });
lyr_TourismSite_2.set('fieldLabels', {'OBJECTID': 'no label', 'Type': 'inline label - always visible', });
lyr_TourismSite_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});