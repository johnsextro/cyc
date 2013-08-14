// Keep a reference to this window so it does not get collected on Android.
var messageWin;
function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup(),
		TeamsWindow = require('ui/common/TeamsWindow');
	
	//create app tabs
	var teamsWin = new TeamsWindow(L('teams_win_title'));
	
	var controlsTab = Ti.UI.createTab({
		title: L('teams_win_title'),
		icon: '/images/tabs/KS_nav_views.png',
		window: teamsWin
	});
	teamsWin.containingTab = controlsTab;
	self.addTab(controlsTab);
	
	self.addEventListener('close', function(e) {
		if (e.source == self){
			if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
				self.open();
			}
		}
	});
	
	self.model = Ti.Platform.model;
	
	return self;
};

module.exports = ApplicationTabGroup;
