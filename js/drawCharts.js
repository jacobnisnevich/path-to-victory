google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawCharts);

function drawChart(chartTitle, chartType, chartData, chartId, chartOptions) {
	var data = google.visualization.arrayToDataTable(chartData);
	var options = {};
	var chart;

	if (chartType == "geochart") {
		options = {
			title: chartTitle,
			region: "US", 
			resolution: "provinces",
			colorAxis: {colors: ['rgb(220, 57, 18)', 'white', 'rgb(51, 102, 204)']}
		};
		chart = new google.visualization.GeoChart(document.getElementById(chartId));
	} else if (chartType == "linechart") {
		options = chartOptions || {
			title: chartTitle,
			curveType: 'discrete',
			legend: { position: 'bottom' }
		};
		chart = new google.visualization.LineChart(document.getElementById(chartId));
	}

	chart.draw(data, options)
}

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

	// Draw currentDelegatesChart
	drawChart("Current Delegate Count", "linechart", currentDelegateData, "currentDelegatesChart", {
		title: 'Actual Delegate Count',
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