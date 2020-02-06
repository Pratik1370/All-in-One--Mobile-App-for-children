//fetches all data from the UI of learningtools
function tiktaktoeUI()
{	console.log("the tiktaktoe UI is running");
	Lheader("images/raw/tictaktoetitle.png");
	TikTakbody();
	Lfooter();
}
//defining of varibales for players
var p1,p2;
//defines the body of the tiktaktoe book
function TikTakbody()
{	
	 p1=window.prompt("Enter Player 1 Name:")
	 p2=window.prompt("Enter Player 2 Name:")

	//for adding learningtools first row
	var learningtooldiv1=addDiv("learningtooldiv1","learningtooldiv1");
	mainwindow.append(learningtooldiv1);
	var row1=addDiv("row1","row");
	learningtooldiv1.append(row1);
	var divimage=addDiv("divimage","column");
	row1.append(divimage);
	var divButton=addButton("myb","p","Play Game");
	divimage.append(divButton);
	divButton.onclick=function()
	{
		table_creation();
	}
	
	
	var divimage1=addDiv("divimage","column");
	row1.append(divimage1);
	var divButton1=addButton("myb1","p1","New Game");
	divimage1.append(divButton1);
	divButton1.onclick=function()
	{
		document.body.innerHTML = '';
		tiktaktoeUI();
		
	}
	
	
	var learningtooldiv2=addDiv("learningtooldiv2","learningtooldiv2");
	 mainwindow.append(learningtooldiv2);
	 var row2=addDiv("row2","row");
	 learningtooldiv2.append(row2);
	 var divimage1=addDiv("divimage1","subcolumn");
	 row2.append(divimage1);
	 
	 var maindisplay=addDiv("tb","pos","1000px","1000px");
	 divimage1.append(maindisplay);
	 divimage1.style.marginleft="40%";
	 
	 
	 var learningtooldiv3=addDiv("learningtooldiv3","learningtooldiv3");
	 mainwindow.append(learningtooldiv3);
	 var row3=addDiv("row3","row");
	 learningtooldiv2.append(row3);
	 var h=addHeading("turn","turn","h4","Player Info");
	 row3.append(h);
	 h.style.marginleft="40%";
	 h.style.color="lightyellow";
}
//*********************************Functionality part****************************//
//defining the players name
//defining if player name is not enterted it to be default names
if(p1=="")
{
	p1="Player 1";
}
if(p2=="")
{
	p2="Player 2";
}
var ss="X";
//defining of 9 boxes for tic tak game
var result=new Array(9); 
//counters 
var counter=0;

function displayElements()
{
	for(i=0;i<=9;i++)
	{
	var c=document.getElementById(i);
	c.disabled=true;
}
}
//button new game
function b()
{
	var b1=document.getElementById("myb");
	var bt="NEW GAME";
	b1.innerHTML=bt;
}

//displaying colour on basis of players turn for one its green and next it is blue
function xC(bl)
{
	var a1=document.getElementById(bl);
	if(result[bl]=="X")
	{
		a1.style.color = 'green';
	}
	else
	{
		a1.style.color = 'blue';
	}
}
//action to be performed when button if pressed
//wiining condition is defined on basis of when counter is 3 which equals that the three conseceutive positions are met
function B_press(b_d)
{
		var t=document.getElementById("turn");
		var c=document.getElementById(b_d);
		c.innerHTML=ss;
		result[b_d] = ss;
		c.disabled=true;
		xC(b_d);
		if(ss=="X")
		{
			ss="O";
		}
		else
		{
			ss="X";
		}
		if(counter>3)
		{
			wincondition();
		}
		if(c.innerHTML=="X")
		{
			t.innerHTML="Player turn=" + p2;
		}
		else
		{
			t.innerHTML="Player turn=" + p1;
		}
		counter++;
}


function arr()
{
	for(i=0;i<=9;i++)
	{
		result[i]=null;
	}
		counter=0;
	}
	function col(x,y,z)
	{
	var a1=document.getElementById(x);
	var b1=document.getElementById(y);
	var c1=document.getElementById(z);
	a1.style.background = 'grey';
	b1.style.background = 'grey';
	c1.style.background = 'grey';
}

//the conditions for wining where the counter values and the result values are checked to find the winning conditions
function wincondition()
{
	//condtion one 
	if(result[0]==result[1]&&result[0]==result[2])
	{
		if(result[0]!=null)
		{
			var a=0;
			var b=1;
			var c=2;
			col(a,b,c);
			if(result[0]=="X")
			{
				alert (p1 + " Wins ");
			}
			else
			{
				alert (p2 + " Wins ");
			}
			displayElements();
			b();	
		}	
	}
	//condition 2
	else if(result[3]==result[4]&&result[3]==result[5])
	{
			if(result[3]!=null)
			{
				var a=3;
				var b=4;
				var c=5;
				col(a,b,c);
				if(result[3]=="X")
				{
					alert (p1 + " Wins ");
				}
				else
				{
					alert (p2 + " Wins ");
				}
				displayElements();
				b();
			}
	}
	//condition 3
	if(result[6]==result[7]&&result[6]==result[8])
	{
			if(result[6]!=null)
			{
				var a=6;
				var b=7;
				var c=8;
				col(a,b,c);
				if(result[6]=="X")
				{
					alert (p1 + " Wins ");
				}
				else
				{
					alert (p2 + " Wins ");
				}
				displayElements();
				b();
			}
	}
	//condition 4
	if(result[0]==result[3]&&result[0]==result[6])
	{
			if(result[0]!=null)
			{
				var a=0;
				var b=3;
				var c=6;
				col(a,b,c);
				if(result[0]=="X")
				{
					alert (p1 + " Wins ");
				}
				else
				{
					alert (p2 + " Wins ");
				}
			}
			displayElements();
			b();
	}
	//condtion 5
	if(result[1]==result[4]&&result[1]==result[7])
	{
		if(result[1]!=null)
		{
			var a=1;
			var b=4;
			var c=7;
			col(a,b,c);
			if(result[1]=="X")
			{
				alert (result[1] + " Wins ");
			}
			else
			{
				alert (p2 + " Wins ");
			}
			displayElements();
			b();
		}
	}
	//condition 6
	if(result[2]==result[5]&&result[2]==result[8])
	{
		if(result[2]!=null)
		{
			var a=2;
			var b=5;
			var c=8;
			col(a,b,c);
			if(result[2]=="X")
			{
				alert (p1 + " Wins ");
			}
			else
			{
				alert (p2 + " Wins ");
			}
			displayElements();
			b();
		}
	}
	//condtion 7
	if(result[0]==result[4]&&result[0]==result[8])
	{
	if(result[0]!=null)
	{
			var a=0;
			var b=4;
			var c=8;
			col(a,b,c);
			if(result[0]=="X")
			{
				alert (p1 + " Wins ");
			}
			else
			{
				alert (p2 + " Wins ");
			}
			displayElements();
			b();
		}
	}
	//condtion 8
	if(result[2]==result[4]&&result[2]==result[6])
	{
		if(result[2]!=null)
		{
			var a=2;
			var b=4;
			var c=6;
			col(a,b,c);
			if(result[2]=="X")
			{
				alert (result[2] + " Wins ");
			}
			else
			{
				alert (p2 + " Wins ");
			}
			displayElements();
			b();
		}
	}
	//condtion 9
	if(counter==8)
	{
		alert ("MATCH DRAW");
		b();
	}
}

//the 3 rows and 3 columns created on tabular form
function table_creation()
{
	var v=0;
	ss="X";
	var tbody = "<table border='5px' width='300px' height='300px'>";
	for (i=0;i<3;i++)
	{
		tbody+="<tr>";
		for (j=0;j<3;j++)
		{
			var b_id=v;
			tbody+="<td><button id='"+b_id+"' onclick='B_press(\""+b_id+"\")'></button></td>";
			v++;
		}
		tbody+="</tr>";
	}
	tbody+="</table>";
	var o=document.getElementById("tb");
	o.innerHTML = tbody;
	arr();
	alert(p1 + " turn")
}

//writing the player names
document.write("<h2 class='player1'>Player 1 = "+p1+"</h2>");
document.write("<h2 class='player2'>Player 2 = "+p2+"</h2>");