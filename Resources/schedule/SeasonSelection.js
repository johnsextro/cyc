function SeasonSelection() {
	var self = Ti.UI.createWindow({
		title : 'Choose A Season',
		backgroundColor : 'black'
	});
	var osname = Ti.Platform.osname;
	SchoolSelection = require('schedule/SchoolSelection');
	
	
	self.layout = 'vertical'
	var btnChooseSeason = Titanium.UI.createButton({
		backgroundImage:'/images/approval-48.png',
		width: '40',
		height: '40',
		right:'10',
		bottom: '3'	
	});
	
	var pckrSeason = Ti.UI.createPicker({
		top : 1,
		useSpinner: true,
		visibleItems: 10
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
		self.close();
	});
	
	var instructions = Ti.UI.createLabel({
	  color: 'white',
	  text: 'Choose the Season',
	  font:{fontSize:16},
	  width: 'auto', height: 'auto'
	});
	
	var url = "http://x8-avian-bricolage-r.appspot.com/season/SeasonService.season";
	// var url = "http://localhost:8080/school/SchoolService.school";
	var data = [];
	var json;
	
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {

		json = JSON.parse(this.responseText);
		if (json.seasons != "") {
			for (i = 0; i < json.seasons.length; i++) {
				season = json.seasons[i];
				data.push(Ti.UI.createPickerRow({title: season.season, value: season.season, hasChild:false, test:''}));
			}	
		} else {
			data.push({title: "No Seasons Found", hasChild:false, test:''});
		}
		
		pckrSeason.add(data); 
		var body = Ti.UI.createView({layout:'vertical', backgroundColor:'black', height: '85%'});
		body.add(instructions);
		body.add(pckrSeason);
		self.add(body);
		pckrSeason.setSelectedRow(0,0,true);
		var footer = Ti.UI.createView({height:'46', bottom: 0, backgroundColor:'silver'});
		footer.add(btnChooseSeason);
		footer.add(btnCancel);
		footer.add(btnBack);
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
	
	btnChooseSeason.addEventListener('click', function(e) {
		var selectedSeason = pckrSeason.getSelectedRow(0).value;
		Ti.App.Properties.setString('Season', selectedSeason);
		schoolSelection = new SchoolSelection();
		schoolSelection.open();
		self.close();
	});
		
	pckrSeason.selectionIndicator = true;

	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type','application/json')
	xhr.send();
	return self;
};

module.exports = SeasonSelection;
