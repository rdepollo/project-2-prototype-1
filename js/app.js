$(document).ready(function() {
  var gn = new GyroNorm();
  var args = {
	frequency:1000,					// ( How often the object sends the values - milliseconds )
	gravityNormalized:true,			// ( If the gravity related values to be normalized )
	orientationBase:GyroNorm.GAME,		// ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
	decimalCount:0,					// ( How many digits after the decimal point will there be in the return values )
	//logger:null,					// ( Function to be called to log messages from gyronorm.js )
	//screenAdjusted:false			// ( If set to true it will return screen adjusted values. )
};

  gn.init().then(function(){
    gn.start(function(data){
      var textAngle = data.do.alpha;
      var circleAngle = 0 - (data.do.alpha);
      //$("body").html(data.do.alpha);
      $("#text").css( {"transform" : "rotate("+ textAngle +"deg)"} );
      $("#angler").html(textAngle);
      //$("#circle").css( {"transform": "rotate("+ circleAngle +"deg)"} );
  });
  }).catch(function(e){
    console.log("device orientation not supported");
  });
  });
