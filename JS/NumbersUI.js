var i; //used for changing the alphabets position
function NumbersUI()
{	
	i=0;
	console.log("learning numbers is running");
	Lheader("images/raw/numberstitle.png");
	Lbodynumbers("images/raw/Numbers/one.png", "images/raw/Numbers/1.png");
	Lfooter();
}
//used to setup the body of the learning tools where three div has been defined one to display object, next to display its category and next to display the functionality
function Lbodynumbers(objimage, objmaindisplay)
{	
	var objimage=objimage;
	var objmaindisplay=objmaindisplay;
	//for adding learningtools first row
	 var learningtooldiv1=addDiv("learningtooldiv1","learningtooldiv1");
	 mainwindow.append(learningtooldiv1);
	 var row1=addDiv("row1","row");
	 learningtooldiv1.append(row1);
	 var divimage=addDiv("divimage","subcolumn");
	 row1.append(divimage);
	 var obimage=addImage("slide","slide",objimage,"","","");
	 divimage.append(obimage);
	 var learningtooldiv2=addDiv("learningtooldiv2","learningtooldiv2");
	 mainwindow.append(learningtooldiv2);
	 var row2=addDiv("row2","row");
	 learningtooldiv2.append(row2);
	 var divimage1=addDiv("divimage1","subcolumn");
	 row2.append(divimage1);
	 var maindisplay=addImage("slide1","slide1",objmaindisplay,"","","");
	 divimage1.append(maindisplay);
	 
	 var functiondiv=addDiv("functiondiv","row");
	 mainwindow.append(functiondiv);
	 var backward=addDiv("backward","column");
	 functiondiv.append(backward);
	 functiondiv.style.backgroundColor='yellow';
	 var backwardimg=addImage("backwardimg","backwardimg","images/raw/backward.png","","","");
	 backwardimg.style.width="30%";
	 backward.append(backwardimg);
	
	//when the backward is clicked 
	 backwardimg.onclick=function()
	 {
		mySlidenumber('prev');
	 }
	 
	 var play=addDiv("play","column");
	 functiondiv.append(play);
	 //var playimg=addImage("play","play","images/raw/play.png","","","");
	// play.append(playimg);
	// playimg.style.width="30%";
	 
	 var forward=addDiv("forward","column");
	 functiondiv.append(forward);
	 var forwardimg=addImage("forward","forward","images/raw/forward.png","","","");
	 forward.append(forwardimg);
	 forwardimg.style.width="30%";
	 forwardimg.style.float="right";
	 
	 //when the forward is clicked 
	 forwardimg.onclick=function()
	 {
		mySlidenumber('next');
	 }
}

//this fuction defines the two div positions where images are changed when next and back button is clicked, the images are fetched from data
function mySlidenumber(param)
{
	if(param === 'next')
       {
                  i++;
                  if(i === imagesrawnumbers.length){ i = imagesrawnumbers.length - 1; }
         }
	else{
                  i--;
                  if(i < 0){ i = 0; }
        }
              
    document.getElementById('slide').src = numberimages[i];
    document.getElementById('slide1').src = imagesrawnumbers[i];
}