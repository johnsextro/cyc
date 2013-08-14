function TeamsWindow(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : 'white'
	});
	var osname = Ti.Platform.osname

	self.layout = 'vertical'
	SeasonSelection = require('schedule/SeasonSelection');

	var header = Ti.UI.createView({
		height : '50',
		backgroundColor : 'silver'
	});
	var btnAddTeam = Titanium.UI.createButton({
		backgroundImage:'/images/add-list-48.png',
		width: '40',
		height: '40',
		right:'10',
		top: '3'
	});
	
	var btnInfo = Titanium.UI.createButton({
		backgroundImage:'/images/info-3-48.png',
		width: '40',
		height: '40',
		left: '10',
		top: '3'
	});
	
	var lblInstructions = Titanium.UI.createLabel({
	  color: 'black',
	  text: 'Slide team right to remove',
	  font:{fontSize:12},
	  width: 'auto', 
	  height: 'auto'
	});
	
	btnAddTeam.addEventListener('click', function(e) {
		winSelectSeason = new SeasonSelection();
		winSelectSeason.open();
	});

	header.add(btnAddTeam);
	header.add(btnInfo);
	header.add(lblInstructions);
	self.add(header);

	var body = Ti.UI.createView({
		height : Ti.UI.SIZE,
		layout : 'vertical',
		backgroundColor : '#fff'
	});
	var tableview = Titanium.UI.createTableView();

	body.add(tableview);
	

	self.add(body);

	self.addEventListener('focus', function(e) {
		var teams = [];
		if (Ti.App.Properties.getList('Teams') != null) {
			teams = Ti.App.Properties.getList('Teams');
		}
		// create table view data object
		var data = [];
		for (var teamIndex = 0; teamIndex < teams.length; teamIndex++) {
			data.push({
				title : teams[teamIndex][1],
				value : teams[teamIndex][0],
				hasChild : true,
				test : 'schedule/schedule'
			});
		};

		// create table view
		for (var i = 0; i < data.length; i++) {
			data[i].color = '#000';
			data[i].font = {
				fontWeight : 'bold'
			}
		};
		tableview.setData(data);
		var popupwin = require("schedule/popup");
		if (Ti.App.Properties.getBool('Welcome', false) == false) {
			popupwin.popup().open();	
		}
	});

	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test), win = new ExampleWindow({
				title : e.rowData.title,
				team_id : e.rowData.value,
				containingTab : self.containingTab,
				tabGroup : self.tabGroup
			});
			self.containingTab.open(win, {
				animated : true
			});
		}
	});

	tableview.addEventListener('swipe', function(e) {
		if (osname === 'iphone' || osname === 'ipad') {
			e.source.setEditable(true);
		} else {
			var props = Ti.App.Properties.getList('Teams');
			props.splice(e.index, 1);
			Ti.App.Properties.setList('Teams', props);
			self.fireEvent('focus');
		}
	});

	if (osname === 'iphone' || osname === 'ipad') {
		tableview.addEventListener('delete', function(e) {
			var props = Ti.App.Properties.getList('Teams');
			props.splice(e.index, 1);
			Ti.App.Properties.setList('Teams', props);
		});
	}
	
	return self;
};
module.exports = TeamsWindow;
