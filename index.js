function calculateAge() {
    let dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please enter your date of birth!");
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust if negative days
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastMonth;
    }

    // Adjust if negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    let resultText = `🎉 You are <span style="color: #ff4757;">${years}</span> years, 
                      <span style="color: #1e90ff;">${months}</span> months, and 
                      <span style="color: #32cd32;">${days}</span> days old!`;

    let resultContainer = document.getElementById("result-container");
    document.getElementById("result").innerHTML = resultText;

    // Show animated result
    resultContainer.classList.add("show");

    // Change background color dynamically based on age
    document.body.style.background = `linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)}, #fad0c4)`;
}
