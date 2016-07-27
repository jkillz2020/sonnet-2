var sonnet = document.getElementById("sonnet");
var sonnetDiv = document.getElementById("sonnet").innerHTML;
//console.log(sonnetDiv);

var startingPosition = sonnetDiv.indexOf("orphans")
console.log("starting position of orphans", sonnetDiv.indexOf("orphans"));

console.log("number of characters in sonnet: ", sonnetDiv.length);

switch (true){
  case startingPosition > 410 :
    console.log("hey, you were right.  That never happens");
    break;
  case startingPosition <= 410 :
    console.log("hey, you were wrong.  That never happens");
  default :
    console.log("WTF");
}

var myArray = [];

for (var i = 100; i > 0; i--) {
  if (i % 2 == 0) {
    myArray.push(i);
  }
  else {
    myArray.unshift(i)
  }
  console.log("myArray on iteration " + i +" : ", myArray);
}



var newContent = sonnetDiv.replace("winter", "yuletide").replace(/the /gi, "a large ");
//console.log("just winter replaced", newContent);

sonnet.innerHTML = newContent;

