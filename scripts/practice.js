//select by tag, id or class
//js vs jquery

document.getElementById("userEmail");
$("#userEmail");

let inputs = document.getElementById("input");
for (let i = 0; i < inputs.length; i++) {inputs[i].style.display = "none";}

$("input").hide();