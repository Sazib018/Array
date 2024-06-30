//task-1

var fruits =['apple','banana','orange'];
var item = fruits.indexOf("banana");
fruits[1] ="mango";

var fruit = fruits.pop();
var fruit= fruits.push("watermelon");
console.log(fruits);

//task-2

var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

//all friends number

var myGrade;
if (myScore >= 80) {
  myGrade = "A";
}
else if (myScore >= 60){myGrade ="B"}
else if (myScore >= 50){myGrade ="C"}
else if (myScore >= 40){myGrade ="D"}
 else {
  myGrade = "F";
}
console.log("my grade:",myGrade);

//tom number

var tomGrade;
if (tomScore >= 80) {
  tomGrade = "B";
}
else if (tomScore >= 60){tomGrade ="B"}
else if (tomScore >= 50){tomGrade ="C"}
else if (tomScore >= 40){tomGrade ="D"}
 else {
  tomGrade = "F";
}
console.log("tom grade:", tomGrade);

//jane number

var janeGrade;
if (janeScore >= 80) {
  janeGrade = "A";
} 
else if (janeScore >= 60){janeGrade ="B"}
else if (janeScore >= 50){janeGrade ="C"}
else if (janeScore >= 40){janeGrade ="D"}
else {
  janeGrade = "F";
}
console.log("jane grade:", janeGrade);

//peter number

var peterGrade;
if (peterScore >= 80) {
  peterGrade = "A";
}
else if (peterScore >= 60){peterGrade ="B"}
else if (peterScore >= 50){peterGrade ="C"}
else if (peterScore >= 40){peterGrade ="D"} 
 else {
  peterGrade = "F";
}
console.log("peter grade:", peterGrade);

//john number

var johnGrade;
if (johnScore >= 80) {
  johnGrade = "D";
} 
else if (johnScore >= 60){johnGrade ="B"}
else if (johnScore >= 50){johnGrade ="C"}
else if (johnScore >= 40){johnGrade ="D"}
 else {
  johnGrade = "F";
}
console.log("john grade:", johnGrade);





