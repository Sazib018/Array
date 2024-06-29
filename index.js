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
if (myScore >= 85) {
  myGrade = "A";
}
 else {
  myGrade = "F";
}
console.log("mygrade:",myGrade);

//tom number

var tomGrade;
if (tomScore >= 66) {
  tomGrade = "B";
}
 else {
  tomGrade = "F";
}
console.log("tom grade:", tomGrade);

//jane number

var janeGrade;
if (janeScore >= 95) {
  janeGrade = "A";
} 
else {
  janeGrade = "F";
}
console.log("jane grade:", janeGrade);

//peter number

var peterGrade;
if (peterScore >= 56) {
  peterGrade = "A";
} 
 else {
  peterGrade = "F";
}
console.log("peter grade:", peterGrade);

//john number

var johnGrade;
if (johnScore >= 40) {
  johnGrade = "D";
} 
 else {
  johnGrade = "F";
}
console.log("john grade:", johnGrade);





