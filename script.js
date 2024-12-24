function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;

    if (celsius !== '') {
        fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (fahrenheit !== '') {
        celsius = (parseFloat(fahrenheit) - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    } else {
        alert('Please enter a value in one of the fields.!');
    }
}







// let celsius = document.getElementById('celsius').value;
// This retrieves the value from the input field with the id="celsius" and stores it in the variable celsius.
// let fahrenheit = document.getElementById('fahrenheit').value;
// Similarly, this retrieves the value from the input field with the id="fahrenheit" and stores it in the variable fahrenheit.
// Checking if the Celsius Field is Not Empty:

// if (celsius !== '') {
// If the celsius input field is not empty, the code will perform the Celsius-to-Fahrenheit conversion.
// fahrenheit = (parseFloat(celsius) * 9/5) + 32;
// This converts the Celsius value to Fahrenheit using the formula (Celsius * 9/5) + 32.
// parseFloat(celsius) ensures the input is treated as a number, even if it's entered as a string.
// document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
// The result is displayed in the Fahrenheit input field, rounded to two decimal places.
// Checking if the Fahrenheit Field is Not Empty:

// else if (fahrenheit !== '') {
// If the fahrenheit input field is not empty, the code performs the Fahrenheit-to-Celsius conversion.
// celsius = (parseFloat(fahrenheit) - 32) * 5/9;
// This converts the Fahrenheit value to Celsius using the formula (Fahrenheit - 32) * 5/9.
// document.getElementById('celsius').value = celsius.toFixed(2);
// The result is displayed in the Celsius input field, rounded to two decimal places.
// Alert for Missing Input:

// else { alert('Please enter a value in one of the fields.!'); }
// If both the Celsius and Fahrenheit fields are empty, an alert is shown prompting the user to enter a value.