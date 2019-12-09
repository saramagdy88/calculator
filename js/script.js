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
    return totaly;
  }
}
// select button to add event on it
var btn = document.getElementById("enter");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  // object from calculator class
  var main = new Calculator(
    // the values of constractor
    document.getElementById("bill").value,
    document.getElementById("service").value,
    document.getElementById("peopleNum").value
  );
  //used the method in object
  var totaly = main.total();
  // select element
  var myResult = document.querySelector(".result");
  var receive = document.createElement("h2");
  receive.innerHTML = totaly;
  receive.className = "close";
  myResult.appendChild(receive);
  var myForm = document.getElementById("formal");
  myForm.reset();
});
