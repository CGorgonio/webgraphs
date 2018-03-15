import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import data from './components/data';
import data2 from './components/data2';
import data3 from './components/data3';
// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

var props_column_chart =
	{
		id: "line_chart",
		type: "line",
		dataSource: data,
		width: "60%",
		height: 400,
		dataFormat: "json"
	};
var bargraph=
	{
		id: "bar_chart",
		type: "bar3d",
		dataSource: data2,
		width: "60%",
		height: 400,
		dataFormat: "json"

	};
var piechart =
	{
		id: "pie_chart",
		type: "pie3d",
		dataSource: data3,

		width: "60%",
		height: 400,
		dataFormat: "json"
	};

ReactDOM.render((
	<div>
		<ReactFC{...props_column_chart} />
		<ReactFC{...bargraph} />
		<ReactFC{...piechart} />
	</div>
),document.getElementById('root'));

	
	
