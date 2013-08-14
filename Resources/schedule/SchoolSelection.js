function SchoolSelection() {
	var self = Ti.UI.createWindow({
		title : 'Choose School',
		backgroundColor : 'black'
	});
	var osname = Ti.Platform.osname;
	AddTeamWindow = require('schedule/AddTeamWindow');
	SeasonSelection = require('schedule/SeasonSelection');
	
	self.layout = 'vertical'
	var instruction = Ti.UI.createLabel({
	  color: 'white',
	  text: 'Choose a School',
	  font:{fontSize:16},
	  width: 'auto', height: 'auto'
	});
	var url = "http://x8-avian-bricolage-r.appspot.com/school/SchoolService.school";
	// var url = "http://localhost:8080/school/SchoolService.school";
	var data = [];
	var json;

	var btnChooseSchool = Titanium.UI.createButton({
		backgroundImage:'/images/approval-48.png',
		width: '40',
		height: '40',
		right: '10',
		bottom: '3'
	});
	
	var btnCancel = Titanium.UI.createButton({
		backgroundImage:'/images/x-mark-48.png',
		width: '40',
		height: '40',
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
	
	btnCancel.addEventListener('click', function(e) {
		self.close();
	});
	
	btnBack.addEventListener('click', function(e) {
		winSelectSeason = new SeasonSelection();
		winSelectSeason.open();
		self.close();
	});

	
	var pckrSchool = Ti.UI.createPicker({
		top : 1,
		useSpinner: true,
		visibleItems: 10
	});

	var xhr = Ti.Network.createHTTPClient({
    onload: function() {

		json = JSON.parse(this.responseText);
		if (json.schools != "") {
			for (i = 0; i < json.schools.length; i++) {
				school = json.schools[i];
				data.push(Ti.UI.createPickerRow({title: school.school, value: school.school, hasChild:false, test:''}));
			}	
		} else {
			data.push({title: "No Coaches Found", hasChild:false, test:''});
		}
		
		pckrSchool.add(data); 
		var body = Ti.UI.createView({layout:'vertical', backgroundColor:'black', height: '85%'});
		body.add(instruction);
		body.add(pckrSchool);
		self.add(body);
		pckrSchool.setSelectedRow(0,0,true);
		var footer = Ti.UI.createView({height:'46', bottom: 0, backgroundColor:'silver'});
		footer.add(btnCancel);
		footer.add(btnBack);
		footer.add(btnChooseSchool);
		self.add(footer);
    },
	onerror: function(e) {
		Ti.API.error("STATUS: " + this.status);
		Ti.API.error("TEXT:   " + this.responseText);
		Ti.API.error("ERROR:  " + e.error);
		alert('There was an error retrieving the remote data. Try again.');
	    },
	    timeout:5000
	});

	btnChooseSchool.addEventListener('click', function(e) {
		var selectedSchool = pckrSchool.getSelectedRow(0).value
		Ti.App.Properties.setString('School', selectedSchool);
		winAddTeam = new AddTeamWindow();
		winAddTeam.open();
		self.close();
	});
		
	pckrSchool.selectionIndicator = true;
	
	var season = Ti.App.Properties.getString('Season', '');
	var params = '{"season": "' +season+ '"}';
	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type','application/json')
	xhr.send(params);
	
	return self;
};

module.exports = SchoolSelection;
