function schedule(_args) {
	var self = Ti.UI.createWindow({
		title:_args.title,
		backgroundColor:'white'
	});
	MessageWindow = require('ui/common/MessageWindow');
	var actInd = new MessageWindow();
	actInd.setLabel("loading...")
	actInd.open();
	
	// {"games": [{"game_date": "4/1/2013", "opponent": "St. J & A", "location": "St. Joes"}, {"game_date": "4/8/2013", "opponent": "Westgate", "location": "St. Joes"}, {"game_date": "4/14/2013", "opponent": "ICD", "location": "ICD"}, {"game_date": "4/28/2013", "opponent": "Holy Spirit", "location": "Holy Spirit"}]}
	var url = "http://x8-avian-bricolage-r.appspot.com/schedule/ScheduleService.schedule";
	// var url = "http://localhost:8080/schedule/ScheduleService.schedule";
	var data = []
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
		for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
		var tableview = Titanium.UI.createTableView({
			data:data
		});
	
		// add table view to the window
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
	xhr.setRequestHeader('Content-Type','application/json')
	xhr.send(params);
	return self;
}

module.exports = schedule;
