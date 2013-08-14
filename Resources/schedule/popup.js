exports.popup = function(){
    var win = Ti.UI.createWindow({
        backgroundColor: 'gray',
        fullscreen: true,
        navBarHidden: false,
        opacity : 0.50,
        id : "popup"
    });
    win.orientationModes = [Ti.UI.PORTRAIT];
 
    var blur = Ti.UI.createAnimation({
        opacity: 0.10
    })
    var shadow = Ti.UI.createView({
        left: 20,
        top: 100,
        right: 20,
        bottom: 50,
        opacity: 0.50,
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: 'black'
    });
    var frmLog = Ti.UI.createView({
        top : 110,
        left: 30,
        right: 30,
        bottom: 60,
        opacity: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        layout: "vertical"
    });
 
    var lblInstructions = Ti.UI.createLabel();
    lblInstructions.setText("Thanks for purchasing the CYC Schedule App!\n\nThese schedules are updated nightly from the CYC Website to make sure you have the latest schedules right at your finger tips.\n\nTo get started click the '+' button to add the teams you want to track.")

    var btngroup = Ti.UI.createView({
        layout: "vertical"
    });
    var btnClose = Ti.UI.createButton({
        title: "OK",
        btnID : "btnClose",
        width: 100
    });
    
    btnClose.addEventListener('click', function(e) {
		Ti.App.Properties.setBool('Welcome', true);
		win.close();
	});
    frmLog.add(lblInstructions);
    frmLog.add(btnClose);
    // shadow.animate(blur);
    win.add(shadow);
    win.add(frmLog);
    return win;
}