//this function is used to add a paragraph
function addParagraph(id, clas,text){
  var para = document.createElement('p');
  var t = document.createTextNode(text);
  para.appendChild(t);
  para.setAttribute("id",id);
  para.setAttribute("class",clas);
  return para;
}
//this function is used to add a heading where htype defines either its H1 or H2 or... H6.
//Paramter passed are id, class ,type and the  text to add
function addHeading(id,clas, htype, text)
{
	if (htype=="H1")
   {
     var heading=document.createElement('H1');
     var t=document.createTextNode(text);
     heading.appendChild(t);
	 heading.setAttribute("id",id);
	 heading.setAttribute("class",clas);
     return heading;
   }
   else if (htype=="H2")
   {
     var heading=document.createElement('H2');
     var t=document.createTextNode(text);
     heading.appendChild(t);
	  heading.setAttribute("id",id);
	 heading.setAttribute("class",clas);
     return heading;
   }
   else if (htype=="H3")
   {
     var heading=document.createElement('H3');
     var t=document.createTextNode(text);
     heading.appendChild(t);
	  heading.setAttribute("id",id);
	 heading.setAttribute("class",clas);
     return heading;
   }
   else{
     var heading=document.createElement('H4');
     var t=document.createTextNode(text);
     heading.appendChild(t);
	  heading.setAttribute("id",id);
	 heading.setAttribute("class",clas);
     return heading;
   }
}
//this function adds a div
function addDiv(id,clas)
{
  var div=document.createElement('div');
  div.setAttribute("id",id);
  div.setAttribute("class",clas);
  return div;
}
//this function adds a Span
function addSpan(id,clas,text)
{
  var span=document.createElement('span');
  span.setAttribute("id",id);
  var t = document.createTextNode(text);
  span.appendChild(t);
  return span;
}
//this function adds a button
function addButton(id,clas,text)
{
    var button=document.createElement("button");
	var t=document.createTextNode(text);
    button.appendChild(t);
	button.setAttribute("id",id);
    button.setAttribute("class",clas);
	return button;
}
//this function adds an image
function addImage(id,clas,path,h,w,alttext)
{
   var image = document.createElement("IMG");
   image.setAttribute("src", path);
   image.setAttribute("width", h);
   image.setAttribute("height", w);
   image.setAttribute("alt", alttext);
   image.setAttribute("id",id);
   image.setAttribute("class",clas);
   return image;
}
//this function adds canvas
function addCanvas(id,clas, height, width)
{
	 var canvas = document.createElement("canvas");
	 canvas.setAttribute("id",id);
	 canvas.setAttribute("class",clas);
	 canvas.setAttribute("height",height);
	 canvas.setAttribute("width",width);
	 return canvas;
}

//for creating input type of range
function addInput(id,clas)
{
  var x = document.createElement("INPUT");
  x.setAttribute("id",id);
  x.setAttribute("class",clas);
  x.setAttribute("type", "range");
  x.setAttribute("value", "10");
  x.setAttribute("min", "10");
  x.setAttribute("max", "30");
  x.setAttribute("step", "2");
  return x;
}
