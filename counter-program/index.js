// COUNTER PROGRAM

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;



increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
    updateColor();
};

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
    updateColor();
};

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
    updateColor();
};
