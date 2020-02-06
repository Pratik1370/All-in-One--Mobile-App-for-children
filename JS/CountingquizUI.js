//fetches all data from the UI of learningtools
//var mainwindow
//**********************************Adding the UI part***************************************//
function countingquizUI()
{	
	console.log("the counting quiz UI is running");
	Lheader("images/raw/CountingQuizTitle.png");
	Lbodyquizcounting();
	Lfooter();
	
}
//defines the body of the Quiz where all the imagequestions are displayed
function Lbodyquizcounting()
{
	var learningtooldiv1=addDiv("test","test");
	mainwindow.append(learningtooldiv1);
	var row1=addDiv("row1","row");
	learningtooldiv1.append(row1);
	test = getquizcounting("test");
	test.style.backgroundColor="lightgreen";
	if(pos >= imagequestions.length){
	test.innerHTML = "<h2>You got "+correct+" of "+imagequestions.length+" imagequestions correct</h2>";
    getquizcounting("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }

  //get("test_status").innerHTML = "Question "+(pos+1)+" of "+imagequestions.length;
  question = imagequestions[pos][0];
  chA = imagequestions[pos][1];
  chB = imagequestions[pos][2];
  chC = imagequestions[pos][3];
  test.innerHTML = "<img src="+question+" width='200px' height='200px' align='center'>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button id='buttonquiz' onclick='checkAnswerquizcounting()'>Submit Answer</button>";
}
//this function is used to get the element to the div
function getquizcounting(x){
  return document.getElementById(x);
}
//function used to check the answer
function checkAnswerquizcounting(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == imagequestions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  Lbodyquizcounting();
}

