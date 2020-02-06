//Code for homepage
var mainwindow;
//this function adds the homepage UI
function homepage()
{    	
	console.log("inside the homepage");
	//code for body
	header();
	body();
	footer();
}
function header()
{
 //Header code
	 mainwindow=addDiv("mainwindow","mainwindow");
	 document.body.append(mainwindow);
	 var header=addDiv("header","row");
	 mainwindow.append(header);
	 var logo=addDiv("logo","column");
	 header.append(logo);
	 var logoimg=addImage("logo","logo","images/raw/logo.png","","","");
	 logo.style.width="80%";
	 logo.append(logoimg);
	 //when the logo is clicked it goes to the homepage
	 logoimg.onclick=function()
	 {
		 document.body.innerHTML = '';
		 homepage();
	 }
	 var gamename=addDiv("gamename","column");
	 header.append(gamename);
	 var allinone=addImage("logo","logo","images/raw/allinone.png","","300px","");
	 gamename.append(allinone);
	 var aboutus=addDiv("aboutus","aboutus");
	 header.append(aboutus);
	 var about=addHeading("about","about","H3","About us");
	 aboutus.append(about);	
	 aboutus.onclick=function()
	 {
		 alert(" This application is developed by Pratik Bhandari,The following sources are referred for the development https://www.w3schools.com/ https://codepen.io/ https://unsplash.com/  https://www.pexels.com/ https://pixabay.com/ http://www.stickpng.com/ ");
	 }
}
//this section has been divided into three different parts where learning tools, entertainment tools and and practicisng tools are included.
function body()
{ 	//for adding div called learning tools
	 var heading=addDiv("headingtext","heading");
	 mainwindow.append(heading);
	 var headingiamge=addImage("headingimage","heaidngimage","images/raw/learning.png","","","");
	 heading.append(headingiamge);
	 
	 //for adding learningtools first row
	 var learningtools=addDiv("learningtools","learningtools");
	 mainwindow.append(learningtools);
	 var row1=addDiv("row1","row");
	 learningtools.append(row1);
	 
	 var alphabet=addDiv("alphabet","column");
	 row1.append(alphabet);
	 var alphabetimage=addImage("","","images/raw/alphabet.png","","","");
	 alphabet.append(alphabetimage);
	 //when alphabetimage is clicked
	 alphabetimage.onclick=function()
	 {
			document.body.innerHTML = '';// to clear up the current HTML window
			AlphabetUI();
	 }
	 
	 var numbers=addDiv("numbers","column");
	 row1.append(numbers);
	 var numberimage=addImage("","","images/raw/numbers.png","","","");
	 numbers.append(numberimage);
	 //when the number image is clicked
	 numberimage.onclick=function()
	 {
			document.body.innerHTML = '';
			NumbersUI();
	 } 
	 
	 var animals=addDiv("animals","column");
	 row1.append(animals);
	 var animalimage=addImage("","","images/raw/animals.png","","","");
	 animals.append(animalimage);
	 animals.onclick=function()
	 {
			document.body.innerHTML = '';
			AnimalsUI();
	 }
	 //for adding second row
	 
	 var row2=addDiv("row2","row");
	 learningtools.append(row2);
	 
	 var vegetables=addDiv("vegetables","column");
	 row2.append(vegetables);
	 var vegetablesimage=addImage("","","images/raw/vegetables.png","","","");
	 vegetables.append(vegetablesimage);
	 //when vegetables image is clicked
	 vegetablesimage.onclick=function()
	  {
			document.body.innerHTML = '';
			vegetablesUI();
	 }
	 var shape=addDiv("shape","column");
	 row2.append(shape);
	 var shapesimage=addImage("","","images/raw/shapes.png","","","");
	 shape.append(shapesimage);
	 //when shapes image is clicked
	 shapesimage.onclick=function()
 {
			document.body.innerHTML = '';
			shapesUI();
	 }
	 
	 var vehicles=addDiv("vehicles","column");
	 row2.append(vehicles);
	 var vehiclesimage=addImage("","","images/raw/vehicles.png","","","");
	 vehicles.append(vehiclesimage);
	 //when vehicles image is clicked
	 vehiclesimage.onclick=function()
	  {
			document.body.innerHTML = '';
			vehiclesUI();
	 }
	 //for adding third row
	 
	 var row3=addDiv("row3","row");
	 learningtools.append(row3);
	 
	 var fruits=addDiv("fruits","column");
	 row3.append(fruits);
	 var fruitsimage=addImage("","","images/raw/fruits.png","","","");
	 fruits.append(fruitsimage);
	 //when fruits image is clicked
	 fruitsimage.onclick=function()
	 {
			document.body.innerHTML = '';
			fruitUI();
	 }
	 
	 var days=addDiv("days","column");
	 row3.append(days);
	 var daysimage=addImage("","","images/raw/days.png","","","");
	 days.append(daysimage);
	 //when the days is clicked it goes to the days page
	 daysimage.onclick=function()
	  {
			document.body.innerHTML = '';
			DaysUI();
	 }
	 
	 var months=addDiv("momnths","column");
	 row3.append(months);
	 var monthsimage=addImage("","","images/raw/months.png","","","");
	 months.append(monthsimage);
	 //when the months image is clicked it goes to the months
	 monthsimage.onclick=function()
	  {
			document.body.innerHTML = '';
			monthsUI();
	 }
	 
	 //for adding fourth row
	 var row4=addDiv("row4","row");
	 learningtools.append(row4);
	 
	 var bodyparts=addDiv("bodyparts","column");
	 row4.append(bodyparts);
	 var bodypartsimage=addImage("","","images/raw/bodyparts.png","","","");
	 bodyparts.append(bodypartsimage);
	 //when body parts image is clicked
	 bodyparts.onclick=function()
	 {
			document.body.innerHTML = '';
			bodypartsUI();
	 }
	 
	 var colour=addDiv("colour","column");
	 row4.append(colour);
	 var colourimage=addImage("","","images/raw/colors.png","","","");
	 colour.append(colourimage);
	 //when colours image is clicked
	 colourimage.onclick=function()
	  {
			document.body.innerHTML = '';
			coloursUI();
	 }
	 
	 var maths=addDiv("maths","column");
	 row4.append(maths);
	 var mathsimage=addImage("","","images/raw/maths.png","","","");
	 maths.append(mathsimage);
	//when maths image is clicked
	 mathsimage.onclick=function()
	  {
			document.body.innerHTML = '';
			mathsUI();
	 }
	 
	//for adding div practicing tools
	var practicing=addDiv("headingtext","heading");
	mainwindow.append(practicing);
	var practisingimage=addImage("headingimage","heaidngimage","images/raw/practice.png","","","");
	practicing.append(practisingimage);
	
	//for creating practice tools elemets
	
	 var practicetools=addDiv("practicetools","practicetools");
	 mainwindow.append(practicetools);
	 
	 var row1=addDiv("row1","row");
	 practicetools.append(row1);
	 //first row
	 var colorbook=addDiv("colorbook","column");
	 row1.append(colorbook);
	 var colorbookimage=addImage("","","images/raw/colorbook.png","","","");
	 colorbook.append(colorbookimage);
	 colorbookimage.onclick=function()
	 {
			document.body.innerHTML = '';
			drawingUI();
	 }
	 var countinggame=addDiv("countinggame","column");
	 row1.append(countinggame);
	 var countingimage=addImage("","","images/raw/countinggame.png","","","");
	 countinggame.append(countingimage);
	 countinggame.onclick=function()
	 {
			document.body.innerHTML = '';
			countingquizUI();
	 }
	 
	 //row2
	 var row2=addDiv("row2","row");
	 practicetools.append(row2);
	 
	 var memorygame=addDiv("memorygame","column");
	 row2.append(memorygame);
	 var memorygameimage=addImage("","","images/raw/memorygame.png","","","");
	 memorygame.append(memorygameimage);
	 memorygameimage.onclick=function()
	 {
			document.body.innerHTML = '';
			memorygameUI();
	 }
	 
	 var quiz=addDiv("quiz","column");
	 row2.append(quiz);
	 var quizimage=addImage("","","images/raw/quiz.png","","","");
	 quiz.append(quizimage);
	  quiz.onclick=function()
	 {
			document.body.innerHTML = '';
			quizUI();
	 }
	 
	//for adding div entertainment tools
	var entertainment=addDiv("entertainmenttools","heading");
	mainwindow.append(entertainment);
	var entertainmentimage=addImage("headingimage","heaidngimage","images/raw/entertainmenttools.png","","","");
	entertainment.append(entertainmentimage);
	
	//for creating practice tools elemets
	
	 var enttools=addDiv("enttol","enttol");
	 mainwindow.append(enttools);
	 
	 var row1=addDiv("row1","row");
	 enttools.append(row1);
	 //first row
	 var tictaktoe=addDiv("tictaktoe","column");
	 row1.append(tictaktoe);
	 var tictaktoeimage=addImage("","","images/raw/tiktaktoe.png","","","");
	 tictaktoe.append(tictaktoeimage);
	 //when ticktaktoe is clicked
	 tictaktoe.onclick=function()
	 {
			document.body.innerHTML = '';
			tiktaktoeUI();

	 }
}

//footer section
function footer()
{
	var footer=addDiv("footer","footer");
	mainwindow.append(footer);
	var ftext=addHeading("ftext","ftext","H3","ALL RIGHTS RESERVED @ PRATIK, pbhand@deakin.edu.au, SID: 217416941");
	footer.append(ftext);	
}