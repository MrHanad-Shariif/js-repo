
    document.getElementById("mySubmit").addEventListener("click", function () {
        let radius = parseFloat(document.getElementById("myText").value);
        let popup = document.getElementById("popup");
        let overlay = document.getElementById("overlay");
        let message = document.getElementById("myH3");

        if (!isNaN(radius) && radius > 0) {
            let circumference = 2 * Math.PI * radius;
            message.textContent = "Circumference: " + circumference.toFixed(2);
        } else {
            message.textContent = "Please enter a valid positive number.";
        }

        // Show popup
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    });