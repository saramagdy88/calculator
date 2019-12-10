//class calculator
class Calculator {
  constructor(billPrice, service, peopleNum) {
    this.billPrice = billPrice;
    this.service = service;
    this.peopleNum = peopleNum;
  }
  //function to calculate the cost of one person
  total() {
    var totaly = (this.billPrice / this.peopleNum) * this.service;
    totaly = Math.round(totaly * 100) / 100;
    //allows us to always have two digits after decimal point
    totaly = totaly.toFixed(2);
    return totaly;
  }
}

// select button to add event on it
var btn = document.getElementById("enter");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  //select input elements
  var myBill = document.getElementById("bill").value;
  var people = document.getElementById("peopleNum").value;

  // object from calculator class

  var main = new Calculator(
    // the values of constractor
    document.getElementById("bill").value,
    document.getElementById("service").value,
    document.getElementById("peopleNum").value
  );
  //check the validition of inputs
  if (myBill === "" || people === "") {
    alert("please enter some values");
    receive.className = "hidden";
  }
  if (myBill <= 0 || people <= 0) {
    alert("please enter positive values");
    receive.className = "hidden";
  }

  //used the method in object
  var totalOb = main.total();
  // select element
  var myResult = document.querySelector(".result");
  var receive = document.createElement("h2");
  receive.innerHTML = totalOb;
  receive.className = "close";
  myResult.appendChild(receive);
  var myForm = document.getElementById("formal");
  myForm.reset();
  // to remove the previous result.
  setTimeout(removable, 4000);
  function removable() {
    receive.remove();
  }
});
