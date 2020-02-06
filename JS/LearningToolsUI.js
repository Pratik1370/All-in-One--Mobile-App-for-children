//-----------------UI of learning tools---------------------------//
var mainwindow; //used for mainwindow divs position
//used to setup the header for all learningtools
function Lheader(title)
{	
	var title=title;
	//Header code
	 mainwindow=addDiv("mainwindow","mainwindow");
	 document.body.append(mainwindow);
	 var header=addDiv("header","row");
	 mainwindow.append(header);
	 var logo=addDiv("logo","column");
	 header.append(logo);
	 logo.style.width="80%";
	 header.style.backgroundColor='yellow';
	 var logoimg=addImage("logo","logo","images/raw/logo.png","","","");
	 logo.append(logoimg);
	 //when the logo is clicked it goes to the homepage
	 logoimg.onclick=function()
	 {
		 document.body.innerHTML = '';
		 homepage();
		// window.location='../includes/homepage.html';
	 }
	 var gamename=addDiv("gamename","column");
	 header.append(gamename);
	 var allinone=addImage("logo","logo",title,"","","");
	 gamename.append(allinone);
	 var sound=addDiv("sound","column");
	  header.append(sound);
	 
	 /*var soundimg=addImage("logo","logo","images/raw/sound.png","","","");
	 sound.append(soundimg);*/
	 var soundimg=addHeading("home","about","H3","Home");
	 sound.append(soundimg);	
	 soundimg.onclick=function()
	 {
		 document.body.innerHTML = '';
		 homepage();
	 }
}
//defines the footer of the application
function Lfooter()
{
	var footer=addDiv("footer","footer");
	mainwindow.append(footer);
	var ftext=addHeading("ftext","ftext","H3","ALL RIGHTS RESERVED @ PRATIK, pbhand@deakin.edu.au, SID: 217416941");
	footer.append(ftext);	
}

