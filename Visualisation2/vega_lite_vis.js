var vg_1 = "vis.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "vg2.json";
vegaEmbed("#vg2", vg_2).then(function(result){}).catch(console.error);