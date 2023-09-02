const firstValue = document.getElementById("first-value");
const secondValue = document.getElementById("second-value");
const calcButton = document.getElementById("calculate-btn");
const displayResult = document.getElementById("display-result");

alert("This website can only calculate the area of squares and rectangles");
calcButton.addEventListener("click", () => {
  displayResult.innerHTML = "";

  if (firstValue.value == secondValue.value) {
    let resultSq;
    resultSq = firstValue.value * secondValue.value;
    let h2 = document.createElement("h2");
    h2.innerHTML = `Square Area : ${resultSq}Cm<sup>2</sup>`;
    displayResult.appendChild(h2);
  } else if (firstValue.value != secondValue.value) {
    let resultRt;
    resultRt = firstValue.value * secondValue.value;
    let h2 = document.createElement("h2");
    h2.innerHTML = `Rectangle Area : ${resultRt}Cm<sup>2</sup>`;
    displayResult.appendChild(h2);
  } else {
    let h2 = document.createElement("h2");
    h2.innerHTML = "You need the add value";
    displayResult.appendChild(h2);
  }
});

TODO: "fix else condition";
