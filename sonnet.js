var sonnet = document.getElementById("sonnet");
var sonnetDiv = document.getElementById("sonnet").innerHTML;
console.log(sonnetDiv);

console.log("starting position of orphans", sonnetDiv.indexOf("orphans"));

console.log("number of characters in sonnet: ", sonnetDiv.length);

var newContent = sonnetDiv.replace("winter", "yuletide").replace(/the /gi, "a large ");
console.log("just winter replaced", newContent);

sonnet.innerHTML = newContent;

