
var output;
var output2;

function wordcalcu(){

var first = document.getElementById("one").value;
var second = document.getElementById("two").value;


if(first == "one" | first == "One")
  { 
output=1;
 }
else if (first == "two"| first == "Two")
{
  output= 2;
}

else if (first == "three"| first == "Three")
{
 output =  3;
}
else if (first == "four" | first == "Four")
{
 output =  4;
}
else if (first == "five" | first == "Five")
{
 output=   5;
}
else { "FEHLER" }



if(second == "one" | second == "One")
  { 
output2 = 1; 
}
else if (second == "two"| second == "Two")
{
  output2= 2;
}

else if (second == "three"| second == "Three")
{
 output2 =  3;
}
else if (second == "four" | second == "Four")
{
 output2 =  4;
}
else if (second == "five" | second == "Five")
{
 output2=   5;
}
else { "FEHLER" }
}

function operation()
{
var oper = document.getElementById("operation").value;

if( oper== "add")
{ 
var result = output+output2;
}
if( oper== "multiply")
{ 
var result = output*output2;
}

if( oper== "subract")
{ 
var result = output-output2;
}
if( oper== "divide")
{ 
var result = output/output2;
}

document.getElementById("output").innerHTML = result;
}

//Nadja Krenzien 5938998 Assignment 3 IASC2P02