document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAge();
});

function calculateAge() {
    var birthDay = parseInt(document.getElementById('birthDay').value);
    var birthMonth = parseInt(document.getElementById('birthMonth').value);
    var birthYear = parseInt(document.getElementById('birthYear').value);

    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Adding 1 because getMonth() returns 0-11

    // Check if the input date is valid
    if (!isValidDate(birthYear, birthMonth, birthDay)) {
        alert("Please enter a valid date.");
        return;
    }

    // Calculate years
    var ageYear = currentYear - birthYear;
    // Calculate months
    var ageMonth = currentMonth - birthMonth;
    if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < birthDay)) {
        ageYear--;
        ageMonth += 12;
    }
    // Calculate days
    var ageDay = today.getDate() >= birthDay ? today.getDate() - birthDay : (new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate() - birthDay + today.getDate());

    // Calculate total months
    var totalMonths = ageYear * 12 + ageMonth;

    var resultString = "Your age is: " + ageYear + " years, " + ageMonth + " months, and " + ageDay + " days.";
    resultString += "<br>Total Months: " + totalMonths + "<br>Total Days: " + (ageYear * 365 + ageMonth * 30 + ageDay);
    
    document.getElementById('result').innerHTML = resultString;
}

function isValidDate(year, month, day) {
    var maxDay = new Date(year, month, 0).getDate();
    return (day > 0 && day <= maxDay);
}
