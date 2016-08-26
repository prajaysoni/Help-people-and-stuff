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
			function printTraffic(incident){
				console.log("Description: " + incident.description);
				console.log("Severity: " + incident.severity);
				console.log("Road Closed: " + incident.roadClosed);
			}

				incidents.forEach(printTraffic);
			})
	});
})