function myFunction() {
  var x = document.getElementById("inputName").value;
  document.getElementById("name").innerHTML = "" + x;
}

function cardNumber() {
  var x = document.getElementById("inputNumber").value;
  document.getElementById("number").innerHTML = +x;
}
function cardYear() {
  var x = document.getElementById("inputYear").value;
  document.getElementById("year").innerHTML = +x;
}
function cardMonth() {
  var x = document.getElementById("inputMonth").value;
  document.getElementById("month").innerHTML = +x;
}
function cardCvc() {
  var x = document.getElementById("inputCvc").value;
  document.getElementById("cvc").innerHTML = +x;
}
