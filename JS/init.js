//this function loads the application
//---------------load application--------------------
function loadApp()
{
	console.log("application All in one is loaded");
	splashscreenUI();
}

//------------------splash screen UI----------------------
//this function adds three components from UI logo, text and splashscreen
//all components are added from UI
function splashscreenUI()
{
		console.log("inside overlay");
		var overlaydiv=addDiv("overlay","overlay"); //adding of new div
		document.body.append(overlaydiv);
		var spinnerdiv=addDiv("Spinner","spinner"); //adding of new div
		overlaydiv.append(spinnerdiv);
		var imglogo=addDiv("imagelogo","imagelogo");
		overlaydiv.append(imglogo);
		var logoimage=addImage(" "," ","images/raw/logo.png","300px","300px","Logo");
		imglogo.append(logoimage);
		var typingtext=addDiv("typewriter","typewriter");
		overlaydiv.append(typingtext);
		var headingtext=addHeading("typewriterheading","typewriterheading","H1","Welcome to all in one App");
		typingtext.append(headingtext);
		var timer = setTimeout(function() { //after 5000ms the page moves to functon homepage
            movetohomepage();
		}, 5000);
}
//to redirect to home page
function movetohomepage()
{
	document.body.innerHTML = '';
	homepage();
}
window.onload=loadApp;