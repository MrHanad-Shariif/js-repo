document.getElementById("myButton").onclick = function () {
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    label1.textContent = rollDice();
    label2.textContent = rollDice();
    label3.textContent = rollDice();
};
