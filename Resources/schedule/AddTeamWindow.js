function AddTeamWindow() {
	var self = Ti.UI.createWindow({
		title:'Add Team',
		backgroundColor:'black'
	});

	self.layout = 'vertical'	
	TeamsWindow = require('ui/common/TeamsWindow');
	SchoolSelection = require('schedule/SchoolSelection');
	
	var instructions = Ti.UI.createLabel({
	  color: 'white',
	  text: 'Choose a Team to Add',
	  font:{fontSize:16},
	  width: 'auto', height: 'auto'
	});
	var url = "http://x8-avian-bricolage-r.appspot.com/coach/CoachService.coach";
	// var url = "http://localhost:8080/coach/CoachService.coach";
	var data = [];
	var json;
	var btnAddTeam = Titanium.UI.createButton({
		backgroundImage:'/images/approval-48.png',
		width: '40',
		height: '40',
		right:'10',
		bottom: '3'
	});
	
	var btnCancel = Titanium.UI.createButton({
		backgroundImage:'/images/x-mark-48.png',
		width: '40',
		height: '40',
		right: '10',
		left: '10',
		bottom: '3'
	});
	
	var btnBack = Titanium.UI.createButton({
		backgroundImage:'/images/arrow-81-48.png',
		width: '40',
		height: '40',
		center: self.width/2,
		bottom: '3'
	});
	
	var osname = Ti.Platform.osname;
	var pckrTeams = Ti.UI.createPicker({useSpinner: true, visibleItems: 10});
	pckrTeams.selectionIndicator = true;
	var row = 0;
	
	btnAddTeam.addEventListener('click', function(e) {
		var savedTeams = [];
		if (Ti.App.Properties.getList('Teams') != null) {
			savedTeams = Ti.App.Properties.getList('Teams');
		}
		savedTeams.push([pckrTeams.getSelectedRow(0).value, pckrTeams.getSelectedRow(0).title]);
		Ti.App.Properties.setList('Teams', savedTeams);
		self.close();
	});
	
	btnCancel.addEventListener('click', function(e) {
		self.close();
	});
	
	btnBack.addEventListener('click', function(e) {
		schoolSelection = new SchoolSelection();
		schoolSelection.open();
		self.close();
	});	
	
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {

		json = JSON.parse(this.responseText);
		if (json.coaches != "") {
			for (i = 0; i < json.coaches.length; i++) {
				coach = json.coaches[i];
				data.push(Ti.UI.createPickerRow({title: coach.name + coach.grade, value: coach.team_id, hasChild:false, test:''}));
			}	
		} else {
			data.push({title: "No Coaches Found", hasChild:false, test:''});
		}
		
		pckrTeams.add(data); 
		pckrTeams.selectionIndicator = true;
		pckrTeams.setSelectedRow(0,0);	
		var body = Ti.UI.createView({height:'85%', layout:'vertical', backgroundColor:'black'});
		body.add(instructions);
		body.add(pckrTeams);	
		self.add(body);
		
		var footer = Ti.UI.createView({height:'46', bottom: 0, backgroundColor:'silver'});
		footer.add(btnAddTeam);
		footer.add(btnCancel);
		footer.add(btnBack);
		self.add(footer);
		pckrTeams.fireEvent('change');
    },
	onerror: function(e) {
		Ti.API.error("STATUS: " + this.status);
		Ti.API.error("TEXT:   " + this.responseText);
		Ti.API.error("ERROR:  " + e.error);
		alert('There was an error retrieving the remote data. Try again.');
	    },
	    timeout:5000
	});
	var school = Ti.App.Properties.getString('School', '');
	var season = Ti.App.Properties.getString('Season', '');
	var params = '{"school": "' +school+ '", "season": "' +season+ '"}';
	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type','application/json')
	xhr.send(params);


	return self;
};

module.exports = AddTeamWindow;