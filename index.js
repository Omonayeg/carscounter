var numOfCars = document.querySelector(".numofcars");
var count = 0;



function increment() {
    count = count + 1;
    numOfCars.innerHTML = count;
}

function decrement() {
    count = count - 1;
    numOfCars.innerHTML = count;
}

function save() {
    var outcome = document.querySelector("p");
    outcome.textContent += " " + count + " + ";
    console.log(count);
    numOfCars.innerHTML = 0;
    count = 0;

}