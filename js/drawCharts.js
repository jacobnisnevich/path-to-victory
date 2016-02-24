google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
	// Draw delegateMap
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory", "geochart", delegateMapData, "delegateMapChart");
	// Draw delegateChart
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory", "linechart", delegateData, "delegateChart");
	// Draw delegateDeltaChart
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory (Delegate Difference)", "linechart", delegateDeltaData, "delegateDeltaChart");

	// Draw delegateClintonLeadMap
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory (Clinton +5)", "geochart", delegateClintonLeadMapData, "delegateClintonLeadMapChart");
	// Draw delegateClintonLeadChart
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory (Clinton +5)", "linechart", delegateClintonLeadData, "delegateClintonLeadChart");
	// Draw delegateClintonLeadDeltaChart
	drawChart("FiveThirtyEight: Bernie Sanders\' Path to Victory (Clinton +5, Delegate Difference)", "linechart", delegateClintonLeadDeltaData, "delegateClintonLeadDeltaChart");

	// Draw delegateCurrentMap
	drawChart("Current Delegate Count", "geochart", delegateCurrentMapData, "delegateCurrentMapChart");	
	// Draw delegateCurrentChart
	drawChart("Current Delegate Count", "linechart", delegateCurrentData, "delegateCurrentChart", {
		title: 'Current Delegate Count',
		curveType: 'discrete',
		legend: { position: 'bottom' },
		hAxis: {
			viewWindow: {
				min: new Date(2016, 1, 1),
				max: new Date(2016, 5, 14)
			}
		}
	});
	// Draw delegateCurrentDeltaChart
	drawChart("Current Delegate Count (Delegate Difference)", "linechart", delegateCurrentDeltaData, "delegateCurrentDeltaChart", {
		title: 'Current Delegate Count (Delegate Difference)',
		curveType: 'discrete',
		legend: { position: 'bottom' },
		hAxis: {
			viewWindow: {
				min: new Date(2016, 1, 1),
				max: new Date(2016, 5, 14)
			}
		}
	});
}

function drawChart(chartTitle, chartType, chartData, chartId, chartOptions) {
	var data = google.visualization.arrayToDataTable(chartData);
	var options = {};
	var chart;

	if (chartType == "geochart") {
		options = {
			title: chartTitle,
			region: "US", 
			resolution: "provinces",
			colorAxis: {
				colors: ['rgb(245, 91, 91)', 'white', 'rgb(8, 126, 215)'],
				values: [-0.5, 0, 0.5]
			},
			backgroundColor: 'transparent',
			textStyle: { 
				auraColor: 'none'
			}
		};
		chart = new google.visualization.GeoChart(document.getElementById(chartId));
	} else if (chartType == "linechart") {
		options = chartOptions || {
			curveType: 'discrete',
			legend: { position: 'bottom' },
			backgroundColor: 'transparent',
			textStyle: {
				auraColor: 'none'
			}
		};
		chart = new google.visualization.LineChart(document.getElementById(chartId));
	}

	chart.draw(data, options);
}
