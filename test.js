$(document).ready(function(){
	$(".test").on('click', function(){
		var url = "http://dev.virtualearth.net/REST/v1/Traffic/Incidents/40.738767,-73.966484,40.752422,-73.985195?key=AgBjTt_1E8sHLHpDywKzH7nSAg_uvQjnVm_Ui4AtBfjDwO2xde-ujDsU6WFgl7GV";

		$.ajax({
			url: url,
			method: "get",
			dataType: "jsonp",
			jsonp: "jsonp"
		})
		.done(function(response){
			var incidents = response.resourceSets[0].resources;
			console.log(incidents);
			function printTraffic(incident){
				console.log("Description: " + incident.description);
				console.log("Severity: " + incident.severity);
				console.log("Road Closed: " + incident.roadClosed);
				console.log("Latitude: " + incident.point.coordinates[0]);
				console.log("Longitude: " + incident.point.coordinates[1]);
				console.log("Type: " + incident.type);
				console.log("");
			}

				incidents.forEach(printTraffic);
			})
	});
})