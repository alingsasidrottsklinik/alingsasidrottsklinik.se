$(document).ready(function() {
	$('#cb-booking').cbOnlineBooking({"uid":"Allings\u00e5s-Rygg-Idrottsklinik-2615",
		appearance: {
			sections: true,
			filters: {
				activity: {
					duration: false,
					groups: false
				}
			},
			timetable: {
				endTime: false,
				provider: true
			}
		},
		params: {
			algorithm: "random",
			days: 6
		},
		defaults: {
			providers:["A"],
			activity:["6"]
		},
		customization: {
			header: {
				show: 0
			},
			filters: {
				provider: {
					show: 1
				}
			},
			streetview: {
				show: 0
			},
			footer: {
				show: 0
			}
		},
		embedded: false,
		language: ""
	});

	$('.cb-onlinebooking').attr('id', 'cb-bookinghook');
});