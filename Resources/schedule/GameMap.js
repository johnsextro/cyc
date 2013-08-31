function GameMap() {

	var win = Titanium.UI.createWindow();
	var regionSet = false;
	
	var btnCancel = Titanium.UI.createButton({
		backgroundImage:'/images/x-mark-48.png',
		width: '40',
		height: '40',
		left: '10',
		bottom: '3'
	});
	
	btnCancel.addEventListener('click', function(e) {
		win.close();
	});
	
	var ash = Titanium.Map.createAnnotation({
	    latitude:38.786472,
	    longitude:-90.481639,
	    title:"Academy of the Sacred Heart",
	    subtitle:'Basketball, Soccer, Volleyball',
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:1 // Custom property to uniquely identify this annotation.
	});
	
	var allSaints = Titanium.Map.createAnnotation({
	    latitude:38.79667,
	    longitude:-90.627975,
	    title:"All Saints",
	    subtitle:'Basketball, Volleyball',
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:2
	});

	var assumption = Titanium.Map.createAnnotation({
	    latitude:38.813183,
	    longitude:-90.700051,
	    title:"Assumption",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:3 // Custom property to uniquely identify this annotation.
	});
	
	var borromeo = Titanium.Map.createAnnotation({
	    latitude:38.787177,
	    longitude:-90.483012,
	    title:"St. Charles Borromeo",
	    subtitle:"Basketball, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:4
	});

	var holyRosary = Titanium.Map.createAnnotation({
	    latitude:38.810595,
	    longitude:-91.136495,
	    title:"Holy Rosary",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:5
	});

	var holySpirit = Titanium.Map.createAnnotation({
	    latitude:38.73385,
	    longitude:-90.434357,
	    title:"Holy Spirit",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:6 
	});

	var holyTrinity1 = Titanium.Map.createAnnotation({
	    latitude:38.722441,
	    longitude:-90.379431,
	    title:"Holy Trinity",
	    subtitle:"Basketball, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:7
	});
		
	var holyTrinity2 = Titanium.Map.createAnnotation({
	    latitude:38.723915,
	    longitude:-90.395186,
	    title:"Holy Trinity",
	    subtitle:"Baseball/Softball, Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:8
	});

	var icd = Titanium.Map.createAnnotation({
	    latitude:38.76726,
	    longitude:-90.756903,
	    title:"Immaculate Conception - Dardene (ICD)",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:9
	});

	var icdMonroe = Titanium.Map.createAnnotation({
	    latitude:38.936989,
	    longitude:-90.77967,
	    title:"Immaculate Conception - Old Monroe",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:10
	});

	var immaculateHeartofMary = Titanium.Map.createAnnotation({
	    latitude:38.710856,
	    longitude:-90.877163,
	    title:"Immaculate Heart of Mary",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:11
	});	
	
	var sacredHeartTroy = Titanium.Map.createAnnotation({
	    latitude:38.978528,
	    longitude:-90.962538,
	    title:"Sacred Heart - Troy",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:12
	});			

	var stCletus = Titanium.Map.createAnnotation({
	    latitude:38.800792,
	    longitude:-90.53538,
	    title:"St. Cletus",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:13
	});

	var sesr = Titanium.Map.createAnnotation({
	    latitude:38.777327,
	    longitude:-90.541425,
	    title:"St. Elizabeth/St. Robert",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:14
	});	

	var sjaa = Titanium.Map.createAnnotation({
	    latitude:38.75574,
	    longitude:-90.599093,
	    title:"Sts. Joachim and Ann",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:15
	});	

	var sjs = Titanium.Map.createAnnotation({
	    latitude:38.742294,
	    longitude:-90.652667,
	    title:"St. Joseph - Cottleville",
	    subtitle:"Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:16
	});
			
	var koc = Titanium.Map.createAnnotation({
	    latitude:38.754556,
	    longitude:-90.658858,
	    title:"Knights of Columbus - St. Joe",
	    subtitle:"Baseball/Softball, Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:17
	});
			
	var sjj = Titanium.Map.createAnnotation({
	    latitude:38.842599,
	    longitude:-90.795645,
	    title:"St. Joseph - Josephville",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:18
	});
			
	var stPatrick = Titanium.Map.createAnnotation({
	    latitude:38.807807,
	    longitude:-90.854654,
	    title:"St. Patrick",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:19
	});
			
	var stPaul = Titanium.Map.createAnnotation({
	    latitude:38.861858,
	    longitude:-90.744898,
	    title:"St. Paul",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:20
	});		
			
	var stPeter = Titanium.Map.createAnnotation({
	    latitude:38.779819,
	    longitude:-90.484455,
	    title:"St. Peter",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:21
	});		
			
	var stTheodore = Titanium.Map.createAnnotation({
	    latitude:38.855061,
	    longitude:-90.863703,
	    title:"St. Theodore",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:22
	});			
			
	var foundersPark = Titanium.Map.createAnnotation({
	    latitude:38.801812,
	    longitude:-90.809469,
	    title:"Founders Park",
	    subtitle:"Baseball/Softball, Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:23
	});			
			
	var laurelPark = Titanium.Map.createAnnotation({
	    latitude:38.766089,
	    longitude:-90.572244,
	    title:"Laurel Park",
	    subtitle:"Baseball/Softball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:24
	});			
			
	var marylandHeightsFields = Titanium.Map.createAnnotation({
	    latitude:38.720119,
	    longitude:-90.421745,
	    title:"Maryland Heights Fields",
	    subtitle:"Baseball/Softball, Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:25
	});
			
	var mcnairPark = Titanium.Map.createAnnotation({
	    latitude:38.795675,
	    longitude:-90.521668,
	    title:"McNair Park",
	    subtitle:"Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:26
	});
			
	var rabbitRun = Titanium.Map.createAnnotation({
	    latitude:38.781889,
	    longitude:-90.630292,
	    title:"Rabbit Run Park",
	    subtitle:"Baseball/Softball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:27
	});		
			
	var ozzieSmith = Titanium.Map.createAnnotation({
	    latitude:38.815461,
	    longitude:-90.682333,
	    title:"Ozzie Smith Sports Complex",
	    subtitle:"Baseball/Softball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:28
	});
			
	var stIgnatius = Titanium.Map.createAnnotation({
	    latitude:38.649694,
	    longitude:-90.139059,
	    title:"St. Ignatius",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:29
	});
			
	var twoRivers = Titanium.Map.createAnnotation({
	    latitude:38.850316,
	    longitude:-90.861906,
	    title:"Two Rivers Sports Complex",
	    subtitle:"Baseball/Softball, Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:30
	});
			
	var vatterot = Titanium.Map.createAnnotation({
	    latitude:38.734954,
	    longitude:-90.384103,
	    title:"Vatterot - St. Ann",
	    subtitle:"Baseball/Softball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:31
	});
			
	var woodlands = Titanium.Map.createAnnotation({
	    latitude:38.772939,
	    longitude:-90.641912,
	    title:"Woodlands Park",
	    subtitle:"Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:32
	});
			
	var sportport = Titanium.Map.createAnnotation({
	    latitude:38.734348,
	    longitude:-90.499052,
	    title:"Sportport",
	    subtitle:"Soccer",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:33
	});					
			
	var duchesne = Titanium.Map.createAnnotation({
	    latitude:38.797431,
	    longitude:-90.499814,
	    title:"Duchesne High School",
	    subtitle:"Baseball/Softball, Basketball, Soccer, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:34
	});
			
	var stDominic = Titanium.Map.createAnnotation({
	    latitude:38.808087,
	    longitude:-90.723097,
	    title:"St. Dominic - Old Gym",
	    subtitle:"Basketball, Volleyball",
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,
	    leftButton: '../images/appcelerator_small.png',
	    myid:35
	});
	
	var mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.HYBRID_TYPE,
	    region: {latitude:38.772421, longitude:-90.634214,
	             latitudeDelta:0.25, longitudeDelta:0.25},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    annotations:[ash, allSaints, assumption, borromeo, holyRosary, holyTrinity1, holyTrinity2, icd, icdMonroe, immaculateHeartofMary, sacredHeartTroy, stCletus, sesr, sjaa, sjs, koc, sjj, stPatrick, stPaul, stPeter, stTheodore, foundersPark, laurelPark, marylandHeightsFields, mcnairPark, rabbitRun, ozzieSmith, stIgnatius, twoRivers, vatterot, woodlands, sportport, duchesne, stDominic]
	});

	win.add(mapview);
	var footer = Ti.UI.createView({height:'46', bottom: 0, backgroundColor:'silver'});
	footer.add(btnCancel);
	win.add(footer);
	
	// Handle click events on any annotations on this map.
	mapview.addEventListener('click', function(evt) {
	
	    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
	
	    // Check for all of the possible names that clicksouce
	    // can report for the left button/view.
	    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
	        evt.clicksource == 'leftView') {
	        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
	    }
	});

	
	// For the iOS platform, wait for the complete event to ensure the region is set
	if (Ti.Platform.name == 'iPhone OS') {
	    mapview.addEventListener('complete', function(evt){
	        if (!regionSet) {
		        mapview.region = {
		            latitude:38.772421, longitude:-90.634214,
		            latitudeDelta:0.25, longitudeDelta:0.25
		        };
		        regionSet = true;
	        }
	    });
	}	
	
	return win;
};

module.exports = GameMap;
