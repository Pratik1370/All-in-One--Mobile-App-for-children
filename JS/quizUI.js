//fetches all data from the UI of learningtools
//var mainwindow
//**********************************Adding the UI part***************************************//
function quizUI()
{	console.log("the quiz UI is running");
	Lheader("images/raw/QuizTitle.png");
	Lbody();
	Lfooter();
	//init();
}
//defines the body of the Quiz where all the questions are displayed
function Lbody()
{
	var learningtooldiv1=addDiv("test","test");
	mainwindow.append(learningtooldiv1);
	var row1=addDiv("row1","row");
	learningtooldiv1.append(row1);
	
	test = get("test");
	test.style.backgroundColor="lightgreen";
	if(pos >= questions.length){
    	
	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  //get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button id='buttonquiz' onclick='checkAnswer()'>Submit Answer</button>";
}


function get(x){
  return document.getElementById(x);
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  Lbody();
}

