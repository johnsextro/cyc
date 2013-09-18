function schedule(_args) {
	var self = Ti.UI.createWindow({
		title:_args.title,
		backgroundColor:'white'
	});
	self.layout = 'vertical';
	MessageWindow = require('ui/common/MessageWindow');
	var actInd = new MessageWindow();
	actInd.setLabel("loading...");
	actInd.open();

	var btnAddCalendarEvents = Titanium.UI.createButton({
		backgroundImage : '/images/calendar-add-48.png',
		width : '40',
		height : '40',
		left : '10',
		top : '3'
	});
		
	var header = Ti.UI.createView({
		height : '50',
		backgroundColor : 'silver'
	});
	
	btnAddCalendarEvents.addEventListener('click', function(e) {
	    var defCalendar = Ti.Calendar.defaultCalendar;
	    var date1 = new Date(new Date().getTime() + 3000),
	        date2 = new Date(new Date().getTime() + 900000);
	    Ti.API.info('Date1 : '+ date1 + 'Date2 : '+ date2);
	    var event1 = defCalendar.createEvent({
	                        title: 'Sample Event',
	                        notes: 'This is a test event which has some values assigned to it.',
	                        location: 'Appcelerator Inc',
	                        begin: date1,
	                        end: date2,
	                        availability: Ti.Calendar.AVAILABILITY_FREE,
	                        allDay: false,
	                });
	    var alert1 = event1.createAlert({
	                        absoluteDate: new Date(new Date().getTime() - (1000*60*20))
	                });
	    var alert2 = event1.createAlert({
	        relativeOffset:-(60*15)
	    });
	    var allAlerts = new Array(alert1,alert2);
	    event1.alerts = allAlerts;
	    // var newRule = event1.createRecurenceRule({
	                        // frequency: Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY,
	                        // interval: 1,
	                        // daysOfTheWeek: [{dayOfWeek:1,week:2},{dayOfWeek:2}],
	                        // end: {occurrenceCount:10}
	                // });
	    // Ti.API.info('newRule : '+ newRule);
	    // event1.recurrenceRules = [newRule];
	    Ti.API.info('Going to save event now');
	    event1.save(Ti.Calendar.SPAN_THISEVENT);
	    // Ti.API.info('Done with saving event,\n Now trying to retreive it.');
	    // printEventDetails(event1.id);
	});
	
	// {"games": [{"game_date": "4/1/2013", "opponent": "St. J & A", "location": "St. Joes"}, {"game_date": "4/8/2013", "opponent": "Westgate", "location": "St. Joes"}, {"game_date": "4/14/2013", "opponent": "ICD", "location": "ICD"}, {"game_date": "4/28/2013", "opponent": "Holy Spirit", "location": "Holy Spirit"}]}
	var url = "http://x8-avian-bricolage-r.appspot.com/schedule/ScheduleService.schedule";
	// var url = "http://localhost:8080/schedule/ScheduleService.schedule";
	var data = [];
	var json, schedule, fighters, games;
	
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {		
		json = JSON.parse(this.responseText);
		if (json.schedule != "") {
			json = JSON.parse(json.schedule);
			//replace this with a for loop to load all the games rather than just one.
			//{"games": [{"game_date": "Sat, 01/05/2013", "time": "1:00 PM", "home": "St_Cletus-Schultehenrich (O)", "away": "SJC-Edmunds (C)", "location": "St_Cletus"}]}
			for (i = 0; i < json.games.length; i++) {
				game = json.games[i];
				data.push({title: game.game_date + ' ' + game.time + ' at ' + game.location, hasChild:false, test:''});
				// ' ' + game.home + ' vs. ' + game.away +
			}	
		} else {
			data.push({title: "No Games Found", hasChild:false, test:''});
		}
		
		// create table view
		for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'}; };
		var tableview = Titanium.UI.createTableView({
			data:data
		});
	
		// add table view to the window
		header.add(btnAddCalendarEvents);
		self.add(header);	
		self.add(tableview);
		actInd.close();
    },
	onerror: function(e) {
		Ti.API.error("STATUS: " + this.status);
		Ti.API.error("TEXT:   " + this.responseText);
		Ti.API.error("ERROR:  " + e.error);
		alert('There was an error retrieving the remote data. Try again.');
	    },
	    timeout:5000
	});
	

	var params = '{"team_id": "' + _args.team_id + '"}';
	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(params);
	return self;
}

module.exports = schedule;
