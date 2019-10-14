var a0 = "hello world";
var a1 = 123;
var a2 = true;
var a3 = ["banana", "lemon", "apple", "kiwi", "grapes"];
var a4 = null;
var a5 ;
var a6 = function d () {};
var a7 = Symbol();

b0=typeof (a0)
b1=typeof (a1)
b2=typeof (a2)
b3=typeof (a3)
b4=typeof (a4)
b5=typeof (a5)
b6=typeof (a6)
b7=typeof (a7)

document.write(b0,"<br>",b1,"<br>",b2,"<br>",b3,"<br>",b4,"<br>",b5,"<br>",b6,"<br>",b7,"<br>");

/*Ternary Operator*/

var myAge = "50";

var result = ( myAge >= "25")? "I am over 25 years old" : "I am under 25";

document.write ("I am over 25 years old","<br>");

/*Conditional Operators*/

var age = 50;

if(age >= 25) {
  document.write("I am over 25 years old");
  
}
else {
  document.write("I am under 25");
}




